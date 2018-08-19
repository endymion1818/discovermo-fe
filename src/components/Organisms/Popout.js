import React from 'react'
import styled from 'styled-components'

import * as variable from '../../variables'

// page layout elements
import { Container } from '../Atoms'


const MainContainer = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : variable.blue700 };
  height: 100%;
  padding: ${variable.TRIPLE} 0;
  text-align:center;
  border-radius:${variable.DOUBLE}};
  color: ${props => props.textColor ? props.textColor : variable.neutral0 };
  border-radius:${props => props.corner ? props.corner : '1em' };
  position: relative;
  background-size:cover;
  background-position: 50% 50%;
`


const PopOut = props => (
  <Container>
    <MainContainer {...props} style={ props.background ? {backgroundImage : `url(${props.background})`}: null } >
        {props.children}
    </MainContainer>
  </Container>
)

export default PopOut