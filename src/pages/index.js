import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  Band,
  Container,
} from '../components/Atoms'
import * as variable from '../components/variables'

const HomeIntro = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextTop = styled.p`
  font-size: 2rem;
`

const TextMain = styled.h1`
  font-size: 3rem;
`

const TextIntro = styled.p`
  font-size: 1.5rem;
`

const IndexPage = props => (
  <div>
  <Band backgroundColor={variable.BRAND_PRIMARY}>
    <Container>
      <HomeIntro>
        <TextTop>Discover</TextTop>
        <TextMain>Mike Oldfield</TextMain>
        <TextIntro>Multi-instrumentalist. Game designer. Genius composer. Discover the incredible world of <Link to="/about">Mike Oldfield.</Link></TextIntro>
      </HomeIntro>
    </Container>
  </Band>
</div>
)

export default IndexPage