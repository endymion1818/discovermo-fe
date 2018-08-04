import React from 'react'
import Styled from 'styled-components'
import Container from './Container'

const InsetContainer = Styled(Container)`
    
    :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background-color: ${props => props.topColor ? props.topColor : BRAND_SECONDARY};
  }
`

export default (props, children) => (
    <InsetContainer>
        { children }
    </InsetContainer>
)