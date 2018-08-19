import React from 'react'
import Button from '../library/Button'

import { Wrapper, Container, Row, Column } from '../library/Elements'
import { TitleH1, TitleH2, TitleH3, SubHeading } from '../library/Headings'
import { TextContainer, Paragraph } from '../library/Text'

const ThreeColumn = props => (
    <Container>
      { props.heading ? <TitleH2>{ props.heading }</TitleH2> : null }
      { props.content ? <Paragraph>{ props.content }</Paragraph> : null }
      <Row>
      {props.col1 ? (
        <Column size="4">
          { props.col1.heading ? <TitleH3>{ props.col1.heading }</TitleH3> : null }
          { props.col1.content ? <TextContainer> {props.col1.content}</TextContainer> : null }
          { props.col1.link ? <Button to={ props.col1.link }>{ props.col1.linkText }</Button>  : null }
        </Column>
        ) : null}
        {props.col2 ? (
        <Column size="4">
        { props.col2.heading ? <TitleH3>{ props.col2.heading }</TitleH3> : null }
          { props.col2.content ? <TextContainer> {props.col2.content}</TextContainer> : null }
          { props.col2.link ? <Button to={ props.col2.link }>{ props.col2.linkText }</Button>  : null }
        </Column>
        ) : null}
        {props.col2 ? (
        <Column size="4">
        { props.col3.heading ? <TitleH3>{ props.col3.heading }</TitleH3> : null }
          { props.col3.content ? <TextContainer> {props.col3.content}</TextContainer> : null }
          { props.col3.link ? <Button to={ props.col3.link }>{ props.col3.linkText }</Button>  : null }
        </Column>
        ) : null}
      </Row>
    </Container>
)

export default ThreeColumn
