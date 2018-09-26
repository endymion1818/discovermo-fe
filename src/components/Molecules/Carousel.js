import React, { Component } from 'react'
import styled from 'styled-components'
import * as variable from '../variables'
import cx from 'classnames'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  user-select: none;

  img {
    -webkit-user-drag: none;
  }
`

const Slider = styled.div``

const Slides = styled.div`
  position: relative;
  display: flex;
`

const Slide = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  
  > * > * {
    background-color: white;
    padding: 0;
    margin: 0 7px;
    border-radius: ${variable.RADIUS_CORNER};
    height: 100%;
  }
`

const Pagination = styled.div`
  display: flex;
  height: ${variable.DOUBLE};
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${variable.DOUBLE} auto 0 auto;
`

const PaginationBubble = styled.div`
  width: ${variable.SINGLE};
  height: ${variable.SINGLE};
  border: ${variable.BORDER_THIN} solid ${variable.BRAND_HILIGHT};
  border-radius: ${variable.RADIUS_BUTTON};
  margin: 0 ${variable.HALF};
  cursor: pointer;
  
  &:hover,
  &:active,
  &:focus {
    background-color: ${variable.BRAND_HILIGHT};
  }
  &.PaginationBubble--Active {
    background-color: ${variable.BRAND_HILIGHT};
    width: ${variable.SINGLEplusHALF};
    height: ${variable.SINGLEplusHALF};
  }
  &.PaginationBubble--Light {
    border: ${variable.BORDER_THIN} solid ${variable.BRAND_HILIGHT};
  }
  &.PaginationBubble--Light:hover {
    background-color: ${variable.BRAND_HILIGHT};
  }
  &.PaginationBubble--Light.PaginationBubble--Active {
    background-color: ${variable.BRAND_HILIGHT};
    width: ${variable.SINGLEplusHALF};
    height: ${variable.SINGLEplusHALF};
  }
`

function createArray(size) {
  var arr = []
  for (var i = 0; i < size; ++i) {
      arr.push(i);
  }
  return arr;
}

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
      interacted: false,
      left: 0,
    }
    this.momentumX = 0
    this.destX = null
    this.width = 0
  }

  UNSAFE_componentWillMount() {
    this.run = true
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(this.runloop)
    }
  }

  componentWillUnmount() {
    this.run = false
  }

  runloop = () => {
    if (this.run) {
      if (this.dragEl && this.dragEl.offsetWidth !== this.width) {
        this.width = this.dragEl.offsetWidth
        this.destX = 0
      }
      if (this.destX !== null && this.dragEl && !this.dragging) {
        const { children, slidesToShow = 1 } = this.props
        const slideCount = React.Children.count(children)
        const newLeft = this.state.left + 0.1 * (this.destX - this.state.left)

        this.setState({
          left: newLeft,
        })
        if (Math.abs(this.state.left - this.destX) < 0.2) {
          this.destX = null
        }
      }
      requestAnimationFrame(this.runloop)
    }
  }

  dragStart = e => {
    this.dragging = true
    this.startX = this.x = this.lastX = e.touches ? e.touches[0].pageX : e.pageX
    this.startLeft = this.state.left
    this.dragEl = e.currentTarget
    window.addEventListener('mouseup', this.dragEnd)
    window.addEventListener('mousemove', this.dragMove)
    window.addEventListener('touchend', this.dragEnd)
    window.addEventListener('touchmove', this.dragMove)
  }

  dragMove = e => {
    const pageX = e.touches ? e.touches[0].pageX : e.pageX
    const newLeft = this.startLeft - this.startX + pageX
    this.setState({
      left: newLeft,
    })
    this.lastX = this.x
    this.x = pageX
  }

  dragEnd = e => {
    const { children, slidesToShow = 1 } = this.props
    const slideCount = React.Children.count(children)
    const pageX = this.x
    const slideWidth = this.dragEl.offsetWidth
    const roundToSlide =
      Math.round(-this.state.left / slideWidth) * slidesToShow
    const originalSlide =
      Math.round(-this.startLeft / slideWidth) * slidesToShow

    if (
      roundToSlide === originalSlide ||
      roundToSlide < 0 ||
      roundToSlide > slideCount / slidesToShow - slidesToShow
    ) {
      if (Math.abs(this.startX - pageX) > 20) {
        if (this.startX > pageX) {
          this.setSlide(originalSlide + slidesToShow)
        } else {
          this.setSlide(originalSlide - slidesToShow)
        }
      }
    } else {
      this.destX = roundToSlide * -slideWidth
    }
    this.dragging = false

    window.removeEventListener('mouseup', this.dragEnd)
    window.removeEventListener('mousemove', this.dragMove)
    window.removeEventListener('touchend', this.dragEnd)
    window.removeEventListener('touchmove', this.dragMove)
  }

  setSlide = n => {
    const { children, slidesToShow = 1 } = this.props
    const slideCount = React.Children.count(children)
    const slideWidth = this.dragEl.offsetWidth / slidesToShow
    const slideBallance = slideCount % 2  === 0 ? (slideCount / slidesToShow) - (slidesToShow % 2) : slideCount -1
    const slideNum = Math.max( 0, Math.min(n, slideBallance) )
    this.destX = slideNum * -slideWidth
  }

  render() {
    const {
      pause,
      speed,
      children,
      slidesToShow = 1,
      lightBubbles = false,
    } = this.props
    const slideCount = React.Children.count(children)
    const { left } = this.state
    const numBubbles = Math.ceil(slideCount / slidesToShow)
    const activeBubble = this.dragEl
      ? Math.min(
          Math.max(
            0,
            Math.ceil(-100 * Math.ceil(left / 100) / this.dragEl.offsetWidth)
          ),
          numBubbles - 1
        )
      : 0
    return (
      <Wrapper>
        <Slider
          innerRef={e => (this.dragEl = e)}
          onMouseDown={this.dragStart}
          onTouchStart={this.dragStart}
        >
          <Slides
            style={{
              left,
              width: 100 / slidesToShow + '%',
            }}
          >
            {React.Children.map(children, (child, i) => <Slide>{child}</Slide>)}
          </Slides>
        </Slider>
        <Pagination style={{ display: numBubbles < 2 ? 'none' : 'flex' }}>
          {createArray(numBubbles).map((v, k) => (
            <PaginationBubble
              key={k}
              className={cx({
                'PaginationBubble--Light': lightBubbles,
                'PaginationBubble--Active': k === activeBubble,
              })}
              onClick={() => this.setSlide(k * slidesToShow)}
            />
          ))}
        </Pagination>
      </Wrapper>
    )
  }
}

export default Carousel
