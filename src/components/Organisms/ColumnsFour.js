import React from 'react'
import styled from 'styled-components'
import * as variable from '../variables'

import Button from '../Molecules/Button'
import Link from '../Molecules/Link'
import { Container, Row, Column, TextContainer } from '../Atoms'
import {HeadingSecondary, HeadingTertiary } from '../Atoms'

const ImageContainer = styled.div`
  text-align: center;
  img {
    display: inline-block;
    width: ${props => (props.imgWidth ? props.imgWidth : variable.QUAD)};
    height: ${props => (props.imgHeight ? props.imgHeight : variable.SEXTUPLE)};
    margin: 0 auto;
  }
`

const HeadingSecondaryExtended = styled(HeadingSecondary)`
  text-align: center;
`

const FourColumn = props => (
  <Container>
    <HeadingSecondaryExtended>{props.heading ? props.heading : null}</HeadingSecondaryExtended>
    <Row>
      {props.data
        ? props.data.map((item, index) => (
            <Column key={index} size="3">
              {item.imagealt ? (
                <ImageContainer>
                  <img alt={item.imagealt} src={item.imageurl} width="100%" />
                </ImageContainer>
              ) : null}
              {item.title ? (
                <HeadingTertiary dangerouslySetInnerHTML={{ __html: item.title }} />
              ) : null}
              {item.mainText ? (
                <TextContainer
                  dangerouslySetInnerHTML={{ __html: item.mainText }}
                />
              ) : null}
              {item.link ? (
                <Link to={item.link}>{item.linkText}</Link>
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
