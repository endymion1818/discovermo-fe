import * as React from 'react'
import {graphql} from 'gatsby'

const DiscoveryTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiDiscovery.title}</h1>
    <p>{data.strapiDiscovery.description}</p>
  </div>
)

export default DiscoveryTemplate

export const query = graphql`
  query DiscoveryTemplate {
    strapiDiscovery {
      title
      description
      spotify_playlist
      vimeo_video
    }
  }
`