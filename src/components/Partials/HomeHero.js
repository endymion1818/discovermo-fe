import React from 'react'
import styled from 'styled-components'
import { Container, RowGrid, ColumnFlex, HeadingPrimary, Paragraph } from '../Atoms'
import LogoColour from '../../img/discovermikeoldfield-logo-color.svg' 
import HomeBackground from '../../img/homebackground.jpg' 

import * as variable from '../variables'

const HomeMasthead = styled.header`
    overflow: hidden;
    position: relative;
    margin-bottom: -12rem;
`

const HomeImg = styled.img`
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
` 

const HomeTitle = styled.div`
    @keyframes fadeinup {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    animation: fadeinup 2s ease-in-out both;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

const HomeParagraph = styled(Paragraph)`
    font-size: 2rem;
`

export default (props) => (
    <HomeMasthead>
        <HomeImg src={HomeBackground}/>
        <Container>
            <RowGrid>
                <ColumnFlex size="6">
                    <HomeTitle>
                        <HeadingPrimary textColor={variable.BRAND_PRIMARY}>Welcome To</HeadingPrimary>
                        <img src={LogoColour} alt="Discover Mike Oldfield" width="100%"/>
                        <HomeParagraph>Visionary composer, talented multi-instrumentalist and immersive VR game designer.</HomeParagraph>
                    </HomeTitle>
                </ColumnFlex>
            </RowGrid>
        </Container>
    </HomeMasthead>
)