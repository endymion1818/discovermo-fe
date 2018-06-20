import * as React from 'react'
import Styled from 'styled-components'

const StyledContainer = Styled.div`
  max-width: 60rem;
  margin: 0 auto;
`

const Container: React.StatelessComponent<{}> = ({ data, children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
)

export default Container
