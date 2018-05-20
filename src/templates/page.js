import React from "react"
import {Helmet} from "react-helmet"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
    <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <main>
        <h1>
          {post.frontmatter.title}
        </h1>
        Posted on: <span>{post.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <aside>
      </aside>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
