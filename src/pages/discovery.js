import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import * as atom from '../components/Atoms'

// Molecules

import Link from '../components/Molecules/Link'
import Button from '../components/Molecules/Button'

// Organisms
import ColumnsOne from '../components/Organisms/ColumnsOne'
import Masthead from '../components/Organisms/Masthead'
import CardsCarousel from '../components/Organisms/CardsCarousel'

export const frontmatter = {
  title: 'Discover',
  path: 'discovery',
  description: 'Discover the world of Mike Oldfield',
  inMainNav: true,
  menuOrder: 5,
}

export default props => (
  <Layout>
    <Helmet>
      <title>Discover | {props.data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly."
      />
    </Helmet>

    <Masthead
      title="Discoveries"
      intro="Mike Oldfield playlists and song analysis"
      textColor={variable.BRAND_SECONDARY}
    />

    <atom.Band id="postlist" backgroundColorBottom={variable.BRAND_SECONDARY}>
      <ColumnsOne
        narrowView
        col1={{
          content: (
            <>
              {props.data.allStrapiDiscovery.edges.map(item => (
                <div key={item} id={item.node.title}>
                  <h3>
                    <Link to={'/discovery/' + item.node.Slug}>
                      {item.node.title}
                    </Link>
                  </h3>
                  <atom.Paragraph>{item.node.excerpt}</atom.Paragraph>
                  <Button transparent to={'/discovery/' + item.node.Slug}>
                    Read this post
                  </Button>
                  <hr />
                </div>
              ))}
            </>
          ),
        }}
      />
    </atom.Band>

    <atom.Band
      id="recent-news"
      textColor="white"
      backgroundColor={variable.BRAND_HILIGHT}
    >
      <CardsCarousel
        posts={props.data.allStrapiPost.edges}
        content="Recent news about Mike Oldfield from the press and sites around the web."
      />
    </atom.Band>
  </Layout>
)

export const query = graphql`
  query homeDiscoveryQuery {
    allStrapiDiscovery(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          Slug
          title
          description
          excerpt
          spotify_playlist
          vimeo_video
        }
      }
    }
    allStrapiPost(limit: 5, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          content
          slug
          id
          createdAt(formatString: "DD MMMM YYYY")
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
