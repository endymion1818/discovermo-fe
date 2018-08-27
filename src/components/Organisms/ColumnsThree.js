import React from 'react'
import Button from '../Molecules/Button'

import { Container, Row, Column, HeadingSecondary, HeadingTertiary, TextContainer, Paragraph } from '../Atoms'

const ThreeColumn = props => (
    <Container>
      { props.heading ? <HeadingSecondary>{ props.heading }</HeadingSecondary> : null }
      { props.content ? <Paragraph>{ props.content }</Paragraph> : null }
      <Row>
      {props.col1 ? (
        <Column size="4">
          { props.col1.heading ? <HeadingTertiary>{ props.col1.heading }</HeadingTertiary> : null }
          { props.col1.content ? <TextContainer> {props.col1.content}</TextContainer> : null }
          { props.col1.link ? <Button to={ props.col1.link }>{ props.col1.linkText }</Button>  : null }
        </Column>
        ) : null}
        {props.col2 ? (
        <Column size="4">
        { props.col2.heading ? <HeadingTertiary>{ props.col2.heading }</HeadingTertiary> : null }
          { props.col2.content ? <TextContainer> {props.col2.content}</TextContainer> : null }
          { props.col2.link ? <Button to={ props.col2.link }>{ props.col2.linkText }</Button>  : null }
        </Column>
        ) : null}
        {props.col2 ? (
        <Column size="4">
        { props.col3.heading ? <HeadingTertiary>{ props.col3.heading }</HeadingTertiary> : null }
          { props.col3.content ? <TextContainer> {props.col3.content}</TextContainer> : null }
          { props.col3.link ? <Button to={ props.col3.link }>{ props.col3.linkText }</Button>  : null }
        </Column>
        ) : null}
      </Row>
    </Container>
)

export default ThreeColumn
