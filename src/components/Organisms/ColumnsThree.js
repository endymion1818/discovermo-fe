import React from 'react'
import styled from 'styled-components'
import Button from '../Molecules/Button'

import * as atom from '../Atoms'

const StyledHeadingSecondary = styled(atom.HeadingSecondary)`
  text-align: center;
`
 
const ThreeColumn = props => (
    <atom.Container>
      { props.heading ? <StyledHeadingSecondary>{ props.heading }</StyledHeadingSecondary> : null }
      { props.content ? <atom.Paragraph>{ props.content }</atom.Paragraph> : null }
      <atom.RowGrid columns="3">
      {props.col1 ? (
        <atom.ColumnFlex>
          { props.col1.heading ? <atom.HeadingTertiary>{ props.col1.heading }</atom.HeadingTertiary> : null }
          { props.col1.content ? <atom.TextContainer> {props.col1.content}</atom.TextContainer> : null }
          { props.col1.link ? <Button to={ props.col1.link }>{ props.col1.linkText }</Button>  : null }
        </atom.ColumnFlex>
        ) : null}
        {props.col2 ? (
        <atom.ColumnFlex>
        { props.col2.heading ? <atom.HeadingTertiary>{ props.col2.heading }</atom.HeadingTertiary> : null }
          { props.col2.content ? <atom.TextContainer> {props.col2.content}</atom.TextContainer> : null }
          { props.col2.link ? <Button to={ props.col2.link }>{ props.col2.linkText }</Button>  : null }
        </atom.ColumnFlex>
        ) : null}
        {props.col2 ? (
        <atom.ColumnFlex>
        { props.col3.heading ? <atom.HeadingTertiary>{ props.col3.heading }</atom.HeadingTertiary> : null }
          { props.col3.content ? <atom.TextContainer> {props.col3.content}</atom.TextContainer> : null }
          { props.col3.link ? <Button to={ props.col3.link }>{ props.col3.linkText }</Button>  : null }
        </atom.ColumnFlex>
        ) : null}
      </atom.RowGrid>
    </atom.Container>
)

export default ThreeColumn
