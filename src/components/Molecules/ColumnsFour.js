import React from 'react'
import styled from 'styled-components'
import Button from '../Molecules/Button'
import Link from '../Molecules/Link'
import { Container, Row, Column, HeadingSecondary, HeadingTertiary } from '../Atoms'

const HeadingSecondaryExtended = styled(HeadingSecondary)`
  text-align: center;
`

const FourColumn = props => (
  <Container textAlign="center">
    <HeadingSecondaryExtended>{props.heading ? props.heading : null}</HeadingSecondaryExtended>
    <Row>
      {props.data
        ? props.data.map((item, index) => (
            <Column key={index} size="3" textAlign="center">
              {item.imagealt ? (
                  <img alt={item.imagealt} src={item.imageurl} width="100%" />
              ) : null}
              {item.title ? (
                <HeadingTertiary dangerouslySetInnerHTML={{ __html: item.title }} />
              ) : null}
              {item.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ) : null}
              {item.link ? (
                <Link to={item.link}>{item.linkText}</Links>
              ) : null}
            </Column>
          ))
        : null}
    </Row>
    {props.footerbtnurl ? (
      <Button to={props.footerbtnurl}>{props.footerbtntext}</Button>
    ) : null}
  </Container>
)

export default FourColumn
