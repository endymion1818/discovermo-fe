import React from 'react'
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
  <Band>
    <Container>
      <HomeIntro>
        <TextTop>Hello.</TextTop>
        <TextMain>You've stumbled on a work in progress</TextMain>
        <TextIntro>This will be a new site to help new fans get to know the work of composer, multi-instrumentalist and game designer Mike Oldfield.. Check back in a while for further updates!</TextIntro>
      </HomeIntro>
    </Container>
  </Band>
</div>
)

export default IndexPage