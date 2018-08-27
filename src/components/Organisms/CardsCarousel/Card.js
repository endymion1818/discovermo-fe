import React from 'react'
import styled from 'styled-components'
import * as variable from '../../variables'

const Wrapper = styled.div`
    {
        padding: 0;
        width: 100%;
        padding: 0 0.5em;
        height: 200px;
    }

    @media (min-width: ${variable.BREAK_PHONE}) {
        width: 100%;
        margin: 0;
    }
`

const Main = styled.div`
    {
        background-color: #ffffff;
        border-radius: 5px;
        font-family: ${variable.OPENSANS};
        height: 200px;
        overflow: hidden;
        width: 100%;
    }

    @media (min-width: ${variable.BREAK_PHONE}) {
        width: auto;
    }
`

const TextContainer = styled.div`
    {
        background-color: #ffffff;
        padding: 1em;
        width: 100%;
    }
`

const Title = styled.h3`
    {
        font-weight: ${variable.BOLD};
        margin-bottom: 0.5em;
        line-height: 1.3em;
    }
`

const TextLink = styled.a`
    {
        cursor: pointer;
    }

    &:hover {
        color: blue;
        text-decoration: underline;
    }
`

const Details = styled.div`
    {
        color: ${variable.navy800};
        font-size: 0.875em;
        line-height: 1.5em;

        &+& {
            margin-bottom: 1em;
        }
    }
`

const NewsCard = props => (
    props.data ? (
        <Wrapper>
            <Main>
                <TextContainer>
                    <Title>
                        <TextLink href={ props.data.link }>
                            { props.data.title }
                        </TextLink>
                    </Title>
                    <Details>{ props.data.author ? props.data.author.name : null }</Details>
                    <Details><date>{ props.data.date }</date></Details>
                </TextContainer>
            </Main>
        </Wrapper>
    ) : (null)
)

export default NewsCard
