import React from 'react'
import styled from 'styled-components'
import Button from '../Molecules/Button'
import Video from '../Organisms/Video'

// page layout elements
import { Container, Row, Column, HeadingSecondary, HeadingTertiary, TextContainer } from '../Atoms'

// this page custom elements
const ImageContainer = styled.div`
  width: 100%;
  text-align:center;
  img {
    width: ${props => props.imgWidth ? props.imgWidth : "100%"};
    margin: 0 auto;
  }
`


const TwoColumn = props => (
  <Container>
    {props.heading ? (
      <Row>
        <Column size="12">
          <HeadingSecondary textColor={props.textColor}>{props.heading}</HeadingSecondary>
        </Column>
      </Row>
    ) : null}
    <Row swapColumns={props.swapColumns}>
      {props.col1 ? (
        <Column size="6" {...props} >
          {props.col1.heading ? (
            <HeadingSecondary textColor={props.textColor} Color={props.textColor}>{props.col1.heading}</HeadingSecondary>
          ) : null}
          {props.col1.subheading ? (
            <HeadingTertiary textColor={props.textColor} Color={props.textColor}>{props.col1.subheading}</HeadingTertiary>
          ) : null}
          {props.col1.content ? <TextContainer textColor={props.textColor}>{props.col1.content}</TextContainer> : null}
          {props.col1.link ? (
            <Button {...props.col1.linkStyle} to={props.col1.link}>
              {props.col1.linkText}
            </Button>
          ) : null}
          {props.col1.youtubeID ? (
              <Video youtubeID={props.col1.youtubeID} />
          ) : null}
          {props.col1.imageUrl ? (
            <ImageContainer {...props}>
              <img
                src={props.col1.imageUrl}
                alt={props.col1.imageAlt}
              />
            </ImageContainer>
          ) : null}
        </Column>
      ) : null}
      {props.col2 ? (
        <Column size="6" {...props}>
          {props.col2.heading ? (
            <HeadingSecondary textColor={props.textColor}>{props.col2.heading}</HeadingSecondary>
          ) : null}
          {props.col2.subheading ? (
            <HeadingTertiary textColor={props.textColor} Color={props.textColor}>{props.col2.subheading}</HeadingTertiary>
          ) : null}
          {props.col2.content ? <TextContainer textColor={props.textColor}>{props.col2.content}</TextContainer> : null}
          {props.col2.link ? (
              <Button {...props.col2.linkStyle} to={props.col2.link}>
                {props.col2.linkText}
              </Button>
          ) : null}
          {props.col2.youtubeID ? (
            <Video youtubeID={props.col2.youtubeID} />
          ) : null}
          {props.col2.imageUrl ? (
            <ImageContainer {...props}>
              <img
                src={props.col2.imageUrl}
                alt={props.col2.imageAlt}
              />
            </ImageContainer>
          ) : null}
        </Column>
      ) : null}
    </Row>
  </Container>
)

export default TwoColumn
