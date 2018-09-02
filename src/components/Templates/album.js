import * as React from 'react'

const AlbumTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiAlbum.title}</h1>
    <p><small>{data.strapiAlbum.yearPublished}</small></p>
    <p>{data.strapiAlbum.about}</p>
  </div>
)

export default AlbumTemplate

export const query = graphql`
  query AlbumTemplate {
    strapiAlbum {
      title
      slug
      yearpublished
      coverimg
      about
    }
  }
`
