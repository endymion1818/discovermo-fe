import React from 'react'
import Link from 'gatsby-link'

const PostTemplate = ({ data }) => (
  <div>
    <h1>{data.strapiPost.title}</h1>
    <p>by <Link to={`/authors/${data.strapiPost.author.id}`}>{data.strapiPost.author.username}</Link></p>
    <p>{data.strapiPost.content}</p>
  </div>
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: {eq: $id}) {
      title
      content
      author {
        id
        username
      }
    }
  }
`
