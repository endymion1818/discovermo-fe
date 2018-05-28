import React from 'react'
import Styled from 'styled-components'

const Container = ({children}) => (
  <div
    style={{
      maxWidth: '900px',
      margin: '0 auto',
      paddingLeft: '15px',
      paddingRight: '15px',
    }}
  >
    {children}
  </div>
)
export default Container
