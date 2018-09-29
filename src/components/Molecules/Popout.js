import React from 'react'
import styled from 'styled-components'

// page layout elements
import { Container} from '../Atoms'

import * as variable from '../variables'

const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : variable.BRAND_PRIMARY };
  height: 100%;
  padding: ${variable.SINGLEplusHALF};
  text-align:center;
  color: ${props => props.textColor ? props.textColor : variable.BRAND_HILIGHT };
  border-radius:${props => props.corner ? props.corner : variable.RADIUS_CORNER };
  position: relative;
  background-size:cover;
  background-position: 50% 50%;

  @media (min-width: ${variable.BREAK_TABLET}) {
    padding: ${variable.TRIPLE};
  }
`


const PopOut = props => (
  <Container>
    <MainContainer {...props} style={ props.background ? {backgroundImage : `url(${props.background})`}: null } >
    {props.children}
    </MainContainer>
  </Container>
)

export default PopOut