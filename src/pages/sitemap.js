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
  inMainNav: false,
  menuOrder: 2,
  categories: [
    'insitemenu',
  ]
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
                        <ul>
                    { props.data.allJavascriptFrontmatter.edges.map(item => (
                            <li key={item.node.id}><Link to={item.node.frontmatter.path}>{ item.node.frontmatter.title }</Link></li>
                    )) 
                    }
                        </ul>
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
                        <ul>
                    { props.data.allStrapiPost.edges.map(item => (
                            <li key={item.node.id}><Link to={item.node.Slug}>{ item.node.Title }</Link>
                            {console.log(item)}</li>
                    )) 
                    }
                        </ul>
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
                        <ul>
                    { props.data.allStrapiDiscovery.edges.map(item => (
                            <li key={item.node.id}><Link to={item.node.Slug}>{ item.node.Title }</Link></li>
                    )) 
                    }
                        </ul>
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
                        <ul>
                    { props.data.allStrapiAlbum.edges.map(item => (
                            <li key={item.node.id}><Link to={item.node.Slug}>{ item.node.Title }</Link></li>
                    )) 
                    }
                        </ul>
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
        Title
      }
    }
  }
  allStrapiPost {
    edges {
      node {
        Title
        Slug
        id
      }
    }
  }
  allStrapiAlbum {
    edges {
      node {
        Title
        Slug
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