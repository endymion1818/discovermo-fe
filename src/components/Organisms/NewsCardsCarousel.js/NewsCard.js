import React from 'react'
import styled from 'styled-components'
import {
    COLOR_DARKBLUE,
    FONT_ALVERATA,
    FONT_OPENSANS,
} from '../../../variables'

const Wrapper = styled.div`
    {
        padding: 0;
        width: 100%;
        padding: 0 0.5em;
        height: 400px;
    }

    @media (min-width: 36em) {
        width: 100%;
        margin: 0;
    }
`

const Main = styled.div`
    {
        background-color: #ffffff;
        border-radius: 5px;
        font-family: ${FONT_OPENSANS};
        height: 400px;
        overflow: hidden;
        width: 100%;
    }

    @media (min-width: 36em) {
        width: auto;
    }
`

const ImageContainer = styled.div`
    {
        background-color: #cccccc;
        height: 200px;
        width: 100%;
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
        font-weight: 600;
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

const Details = styled.span`
    {
        color: ${COLOR_DARKBLUE};
        display: inline-block;
        font-size: 0.875em;
        line-height: 1.5em;
        margin-bottom: 1em;
    }
`

const NewsCard = props => (
    <Wrapper>
        <Main>
            <ImageContainer></ImageContainer>
            <TextContainer>
                <Details>{ props.data.authorName }| Posted { props.data.postDate }</Details> 
                <Title>
                    <TextLink>
                        { props.data.title }
                    </TextLink>
                </Title>
                
            </TextContainer>
        </Main>
    </Wrapper>
)

export default NewsCard