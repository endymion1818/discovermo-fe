import * as React from 'react'

const DiscoveryTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiDiscovery.title}</h1>
    <p>{data.strapiDiscovery.description}</p>
  </div>
)

export default DisoveryTemplate

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
