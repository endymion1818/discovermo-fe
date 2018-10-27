import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'
import CardsCarousel from '../Organisms/CardsCarousel'
import ColumnsTwo from '../Organisms/ColumnsTwo'

const DiscoveryTemplate = props => (
  <Layout>
    <Helmet>
        <title>{ props.data.strapiDiscovery.title } | { props.data.site.siteMetadata.title }</title>
        <meta name="description" content={ props.data.strapiDiscovery.about } />
    </Helmet>
    <atom.Container>
      <ColumnsTwo
        col1={{
          heading: props.data.strapiDiscovery.title,
          content: props.data.strapiDiscovery.description
        }}
        col2={{
          content: 
            <div dangerouslySetInnerHTML={{ __html: props.data.strapiDiscovery.spotify_playlist }}/>
        }}
      />
    </atom.Container>
    <atom.Band id="recent-news"
      textColor="white"
      backgroundColor={variable.BRAND_HILIGHT}>
      <CardsCarousel
        posts={props.data.allStrapiPost.edges}
        content="Recent news about Mike Oldfield from the press and sites around the web."
     />
    </atom.Band>
  </Layout>
  
)

export default DiscoveryTemplate

export const query = graphql`
  query DiscoveryTemplate($id: String!) {
    strapiDiscovery(id: { eq: $id }) {
      id
      Slug
      title
      description
      spotify_playlist
      vimeo_video
    }
    allStrapiPost(
      limit:5
      sort: {fields: [createdAt], order: DESC},
    ) {
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
    allStrapiAlbum(limit:5) {
      edges {
        node {
          title
          slug
          coverimg
          }
        }
      }
    }
`
