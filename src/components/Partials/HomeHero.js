import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column, HeadingPrimary, Paragraph } from '../Atoms'
import LogoColour from '../../img/discovermikeoldfield-logo-color.svg' 
import * as variable from '../variables'

const RowExt = styled(Row)`
    overflow: hidden;
`

const HomeMasthead = styled.header`
    overflow: hidden;
    position: relative;
    margin-bottom: -6rem;
    background-image: linear-gradient(to top, #4facfe 0%, #00f2fe 100%);

    @media (min-width: ${variable.BREAK_TABLET}) {
        margin-bottom: -12rem;
    }
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
    font-size: 1.6rem;
`

export default props => (
    <HomeMasthead>
        <Container>
            <RowExt>
                <Column size="8">
                    <HomeTitle>
                        <HeadingPrimary textColor={variable.BRAND_PRIMARY}>Welcome To</HeadingPrimary>
                        <img src={LogoColour} alt="Discover Mike Oldfield" width="100%"/>
                        <HomeParagraph>Visionary composer Mike Oldfield has changed the landscape of music forever with his album Tubular Bells in 1973. Since then, he has composed, produced and performed more than 20 amazing rock, classical, and folk, albums that continue to inspire people around the world.</HomeParagraph>
                    </HomeTitle>
                </Column>
            </RowExt>
        </Container>
    </HomeMasthead>
)