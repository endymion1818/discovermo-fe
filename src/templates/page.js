import React from "react"
import {Helmet} from "react-helmet"
export default ({ data }) => {
  const post = data.markdownRemark

  if (post.frontmatter.type == 'page') {
  return (
    <div>
    <Helmet title={`${post.frontmatter.title} | ${site.siteMetadata.title}`} />
      <div>
        <h1>
          {post.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div>
      </div>
    </div>
  )
  }else{
    return (
      <div>
      <Helmet title={`${post.frontmatter.title} | ${site.siteMetadata.title}`} />
        <div>
          <h1>
            {post.frontmatter.title}
          </h1>
          Posted on: <span>{post.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div>
        </div>
      </div>
    ) 
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    strapiPost {
        title
        createdAt(formatString: "DD MMMM, YYYY")
        content
      }
    }
`
