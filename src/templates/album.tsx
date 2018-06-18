import * as React from 'react'
import Link from 'gatsby-link'

interface AlbumProps {
  data: {
    strapiAlbum: {
      title: string
      published: date
      about: string
    }
  }
}

const AlbumTemplate: React.StatelessComponent<{}> = ({ data }) => (
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
