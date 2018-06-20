import * as React from 'react'
import Styled from 'styled-components'
import Container from './Container'

const StyledBand = Styled.section`
  background-color: black;

  > * {
    background-color: white;
  }
`

const Band: React.StatelessComponent<{}> = ({ data, children }) => (
  <StyledBand>
    <Container>
      {children}
    </Container>
  </StyledBand>
)

export default Band
