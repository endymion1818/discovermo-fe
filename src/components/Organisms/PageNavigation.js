import React, { Component } from 'react'
import styled from 'styled-components'
import * as variable from '../../variables'
import Scrollspy from 'react-scrollspy'

import {
  LargeView,
} from '../../components/Atoms'

const PageNav = styled.div`

  align-items: center;
  background-color: #1d2239;
  color: #d6d7de;
  font-size: 1rem;
  font-family: ${variable.OPENSANS};
  font-weight: ${variable.NORMAL};
  height: 64px;
  padding: 0 48px;
  width: 100%;

  display: flex;
  position: fixed;
  top: 96px;
  z-index: 99;
  white-space: nowrap;
  overflow: scroll;
`

const PageNavSpacer = styled.div`
  @media all and (min-width: 56.25em) {
    height: 64px;
  }
`

const MenuItems = styled.div`
  display: flex;
  height: 100%;
  margin-left: 0;
  -ms-overflow-style: none;
  overflow: auto;

  > div {
    display: flex;
  }

  @media all and (min-width: ${variable.BREAK_DESKTOP}) {
    margin-left: 30px;
  }
`

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: ${variable.OPENSANS};
  font-weight: ${variable.NORMAL};
  color: #ffffff;
  padding: 0 5px;
  margin-right: 30px;
  box-sizing: border-box;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus,
  &.MenuItem--Active {
    border-bottom: 4px solid ${variable.teal600};
  }
`

class PageNavigation extends Component {

  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.href.replace(/.*#/,"");
    const elem =  document.getElementById(id);
    if(elem) {
      const currentTop = window.scrollY;
      window.location.href="#" + id
      window.scrollTo({
        top: currentTop
      });
      const top = elem.getBoundingClientRect().top + window.scrollY -64;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  }

  render() {
    const { items = [] } = this.props
    const anchors = items.map((item)=>item.url.substring(1))
    return (
      <div>
        <PageNavSpacer />
        <PageNav className="PageNav">

          <LargeView>On this page:</LargeView>
            <MenuItems>
              <Scrollspy items={anchors} currentClassName="MenuItem--Active" componentTag="div">
                {items.map((item, index) => (
                  <MenuItem key={index} href={item.url} onClick={this.handleClick}>
                    {item.name}
                  </MenuItem>
                ))}
              </Scrollspy>
            </MenuItems>
        </PageNav>
      </div>
    )
  }
}

export default PageNavigation
