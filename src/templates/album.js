import React from 'react'
import Link from 'gatsby-link'

const AlbumTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiAlbum.title}</h1>
    <p><small>{data.strapiAlbum.published}</small></p>
    <p>{data.strapiAlbum.about}</p>
  </div>
)

export default AlbumTemplate

export const query = graphql`
  query AlbumTemplate {
    strapiAlbum {
      title
      published
      about
    }
  }
`
