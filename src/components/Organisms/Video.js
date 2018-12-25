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
  <Main
    dangerouslySetInnerHTML={{
      __html:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
        props.embedCode +
        '?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    }}
  />
)

export default Video
