import React from 'react'
import { HeadingSecondary, HeadingTertiary,Container, Row, RowCenter, Column, TextContainer } from '../Atoms'
import Button from '../Molecules/Button'
import Video from '../Organisms/Video'

const OneColumn = props => (
  <Container>
    {props.heading ? (
      <Row>
        <Column {...props } size={ props.narrowView ? "8" : "12" }>
          <HeadingSecondary textColor={props.textColor}>{props.heading}</HeadingSecondary>
        </Column>
      </Row>
    ) : null}
    <RowCenter>
      {props.col1 ? (
        <Column {...props } size={ props.narrowView ? "8" : "12" }>
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
              <img alt={props.col1.imageAlt} src={props.col1.imageUrl} />
          ) : null}
        </Column>
      ) : null}
    </RowCenter>
  </Container>
)

export default OneColumn
