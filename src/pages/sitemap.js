import React from 'react'
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import * as variable from '../components/variables'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link'
import * as atom from '../components/Atoms'

import Masthead from '../components/Organisms/Masthead'
import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "Sitemap",
  path: "sitemap",
  description: "All pages on this website",
  inMainNav: false
}

const sitemap = props => (
  <Layout>
    <Helmet>
      <title>Sitemap | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="All pages on this website.." />
    </Helmet>
    <Masthead
        title="Sitemap"
        intro="All pages on this website."
        textColor={variable.BRAND_SECONDARY}
    />
    <atom.Band>
        <atom.Container>
            <ColumnsOne
                col1={{
                content: 
                    <>
                    <atom.HeadingSecondary>Pages</atom.HeadingSecondary>
                    { props.data.allJavascriptFrontmatter.edges.map(item => (
                        <ul key={item} id={item.node.frontmatter.title}>
                            <li><Link to={item.node.frontmatter.path}>{ item.node.frontmatter.title }</Link></li>
                        </ul>
                    )) 
                    }
                    </>
                }}
            />
        </atom.Container>
    </atom.Band>
    <atom.Band>
        <atom.Container>
            <ColumnsOne
                col1={{
                content: 
                    <>
                    <atom.HeadingSecondary>Posts</atom.HeadingSecondary>
                    { props.data.allStrapiPost.edges.map(item => (
                        <ul key={item} id={item.node.title}>
                            <li><Link to={item.node.slug}>{ item.node.title }</Link></li>
                        </ul>
                    )) 
                    }
                    </>
                }}
            />
        </atom.Container>
    </atom.Band>
    <atom.Band>
        <atom.Container>
            <ColumnsOne
                col1={{
                content: 
                    <>
                    <atom.HeadingSecondary>Discoveries</atom.HeadingSecondary>
                    { props.data.allStrapiDiscovery.edges.map(item => (
                        <ul key={item} id={item.node.title}>
                            <li><Link to={item.node.Slug}>{ item.node.title }</Link></li>
                        </ul>
                    )) 
                    }
                    </>
                }}
            />
        </atom.Container>
    </atom.Band>
    <atom.Band>
        <atom.Container>
            <ColumnsOne
                col1={{
                content: 
                    <>
                    <atom.HeadingSecondary>Albums</atom.HeadingSecondary>
                    { props.data.allStrapiAlbum.edges.map(item => (
                        <ul key={item} id={item.node.title}>
                            <li><Link to={item.node.slug}>{ item.node.title }</Link></li>
                        </ul>
                    )) 
                    }
                    </>
                }}
            />
        </atom.Container>
    </atom.Band>
  </Layout>
)

export default sitemap

export const query = graphql`
query sitemapQuery {
  allStrapiDiscovery {
    edges {
      node {
        id
        Slug
        title
      }
    }
  }
  allStrapiPost {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
  allStrapiAlbum {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
  allJavascriptFrontmatter {
    edges {
      node {
        frontmatter {
          title
          path
        }
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