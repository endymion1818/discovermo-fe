import React from 'react'
import styled from 'styled-components'

const Main = styled.div`

  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const Video = props => (
  <Main dangerouslySetInnerHTML={{__html: props.embedCode}}/>
)

export default Video