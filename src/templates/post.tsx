import * as React from 'react'
import Link from 'gatsby-link'

interface AlbumProps {
  data: {
    strapiPost: {
      title: string
      content: string
    }
  }
}

const PostTemplate: React.StatelessComponent<{}> = ({ data }) => (
  <div>
    <h1>{data.strapiPost.title}</h1>
    <p>{data.strapiPost.content}</p>
  </div>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate {
    strapiPost {
      title
      content
    }
  }
`
