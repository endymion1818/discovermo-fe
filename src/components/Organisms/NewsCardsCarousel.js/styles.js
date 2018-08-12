import React from 'react'
import styled from 'styled-components'
import {
    COLOR_DARKBLUE,
    FONT_ALVERATA,
    FONT_OPENSANS,
} from '../../../variables'

const Main = styled.div`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : COLOR_DARKBLUE }
`

const Container = styled.div`
    {
        box-sizing: content-box;
        max-width: 64em;
        margin: 0 auto;
        overflow: hidden;
        padding: 6em 0 9em 0;
    }
    
    @media (min-width: 36em) {
        padding: 6em 0 9em 5em;
    }

    @media (min-width: 48em) {
        padding: 6em 0.5em 9em 5em;
    }

    .slick-dots {
        bottom: -60px;    
    }

    .slick-dots li button {
        border: 2px solid #ffffff;
        border-radius: 50%;
        height: 16px;
        width: 16px;
        text-indent: -9999px;
    }

    .slick-dots li button:hover,
    .slick-dots li.slick-active button {
        background-color: #ffffff;
    }
`

const NewsCardsContainer = styled.div` 
    
    @media (min-width: 36em) {
        width: 60%;
        float: right;
    }
`

const MainTextContainer = styled.div`
    {
        margin: 0 2em 2em 3.5em;
    }

    @media (min-width: 36em) { 
        padding-right: 0;
        float: left;
        margin: 0 0 1em;
        width: 40%;
    }
`

const MainHeading = styled.h2`
    {
        color: #ffffff;
        font-family: ${FONT_ALVERATA};
        font-size: 2em;
        line-height: 1.5em;
        margin-bottom: 0.5em;
    }
`

const MainParagraph = styled.p`
    {
        color: #ffffff;
        font-family: ${FONT_OPENSANS};
        font-size: 1.250em;
        line-height: 1.5em;
        margin-bottom: 1em;
    }
    
    @media (min-width: 36em) { 
        margin-bottom: 5em;
    }
`

const SmallView = styled.div`
    {
        display: block;
    }

    @media (min-width: 48em) { 
        display: none;
    }
`

const LargeView = styled.div`
    {
        display: none;
    }

    @media (min-width: 48em) { 
        display: block;
    }
`

export {
    Main,
    NewsCardsContainer,
    MainTextContainer,
    MainHeading,
    MainParagraph,
    Container,
    SmallView,
    LargeView,
}