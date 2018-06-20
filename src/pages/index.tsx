import * as React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

interface IndexPageProps {
  allStrapiPost: {
    edges: {
      node: {
        id: string,
        title: string,
        content: string,
        slug: string
      }
    }
  }
  allStrapiAlbum: {
    edges: {
      node: {
        id: string,
        title: string,
        published: string,
        about: string,
        slug: string
      }
    }
  }
}

const IndexPage: React.StatelessComponent<{data, allStrapiPost, allStrapiAlbum}> = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <ul>
      {data.allStrapiAlbum.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.slug}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
    allStrapiAlbum {
      edges {
        node {
          id
          title
          published
          about
          slug
        }
      }
    }
  }
`
