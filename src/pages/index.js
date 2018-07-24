import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import HomeAnimation from ''

const Banner = styled.section`
  display: flex;
`
const HomeIntro = styled.div`
  background-color: white;
  display: flex;
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

export default IndexPage = props => (
  <div>
  <Banner>
    <HomeAnimation/>
    <HomeIntro>
      <TextTop>Discover</TextTop>
      <TextMain>Mike Oldfield</TextMain>
      <TextIntro>Multi-instrumentalist. Game designer. Genius composer. Discover the incredible world of <Link to="/about">Mike Oldfield.</Link></TextIntro>
    </HomeIntro>
  </Banner>
  
</div>
)