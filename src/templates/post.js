import * as React from 'react'

const PostTemplate = ({ data }) => (
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
