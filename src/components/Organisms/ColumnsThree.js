import React from 'react'
import styled from 'styled-components'
import Button from '../Molecules/Button'

import { Container, RowGrid, ColumnFlex, HeadingSecondary, HeadingTertiary, TextContainer, Paragraph } from '../Atoms'

const StyledHeadingSecondary = styled(HeadingSecondary)`
  text-align: center;
`

const ThreeColumn = props => (
    <Container>
      { props.heading ? <StyledHeadingSecondary>{ props.heading }</StyledHeadingSecondary> : null }
      { props.content ? <Paragraph>{ props.content }</Paragraph> : null }
      <RowGrid columns="3">
      {props.col1 ? (
        <ColumnFlex>
          { props.col1.heading ? <HeadingTertiary>{ props.col1.heading }</HeadingTertiary> : null }
          { props.col1.content ? <TextContainer> {props.col1.content}</TextContainer> : null }
          { props.col1.link ? <Button to={ props.col1.link }>{ props.col1.linkText }</Button>  : null }
        </ColumnFlex>
        ) : null}
        {props.col2 ? (
        <ColumnFlex>
        { props.col2.heading ? <HeadingTertiary>{ props.col2.heading }</HeadingTertiary> : null }
          { props.col2.content ? <TextContainer> {props.col2.content}</TextContainer> : null }
          { props.col2.link ? <Button to={ props.col2.link }>{ props.col2.linkText }</Button>  : null }
        </ColumnFlex>
        ) : null}
        {props.col2 ? (
        <ColumnFlex>
        { props.col3.heading ? <HeadingTertiary>{ props.col3.heading }</HeadingTertiary> : null }
          { props.col3.content ? <TextContainer> {props.col3.content}</TextContainer> : null }
          { props.col3.link ? <Button to={ props.col3.link }>{ props.col3.linkText }</Button>  : null }
        </ColumnFlex>
        ) : null}
      </RowGrid>
    </Container>
)

export default ThreeColumn
