import React from 'react'
import Button from '../Molecules/Button'
import Video from '../Organisms/Video'
import * as atom from '../Atoms'


const OneColumn = props => (
  <atom.Container>
    {props.heading ? (
      <atom.Row>
        <atom.ColumnFlex {...props } size="12">
          <atom.HeadingSecondary textColor={props.textColor}>{props.heading}</atom.HeadingSecondary>
        </atom.ColumnFlex>
      </atom.Row>
    ) : null}
    <atom.Row>
      {props.col1 ? (
        <atom.ColumnFlex {...props } size="12">
          {props.col1.heading ? (
            <atom.HeadingSecondary textColor={props.textColor} Color={props.textColor}>{props.col1.heading}</atom.HeadingSecondary>
          ) : null}
          {props.col1.subheading ? (
            <atom.HeadingTertiary textColor={props.textColor} Color={props.textColor}>{props.col1.subheading}</atom.HeadingTertiary>
          ) : null}
          {props.col1.content ? <atom.TextContainer textColor={props.textColor}>{props.col1.content}</atom.TextContainer> : null}
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
        </atom.ColumnFlex>
      ) : null}
    </atom.Row>
  </atom.Container>
)

export default OneColumn
