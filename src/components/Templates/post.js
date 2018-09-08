import * as React from 'react'
import { Container } from '../Atoms'

const PostTemplate = ({ data }) => (
  <Container>
    <h1>{data.strapiPost.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.strapiPost.content }} />
  </Container>
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
