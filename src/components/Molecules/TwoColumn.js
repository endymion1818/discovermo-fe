import React from 'react'
import styled from 'styled-components'
import Button from './Button'

import {
    Container,
    Row,
    Column,
    HeadingSecondary
} from '../Atoms'
 

const VideoContainer = styled.div`
    width: 100%;
    min-width: 320px;
    margin: auto;
    height: auto;
`

const ButtonContainer = styled.div`
    width: 100%;
    padding-top: 1em;
    padding-bottom: 1em;
`

const TwoColumn = props => (
        <Container>
            <Row swapColumns={ props.swapColumns }>
                <Column size="6">
                    { props.heading ? <HeadingSecondary textColor={ props.textcolor }>{ props.heading }</HeadingSecondary> : null }
                    { props.content ? props.content : null }
                    { props.link ? <ButtonContainer><Button transparentWhiteOutline href={ props.link }>{ props.linkText }</Button></ButtonContainer> : null }
                </Column>
                <Column size="6">
                    { props.embedCode ? <VideoContainer><Video embedCode={ props.embedCode } /></VideoContainer> : null }
                </Column>
            </Row>
        </Container>
)

export default TwoColumn
