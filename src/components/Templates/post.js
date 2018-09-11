import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from './Layout'
import * as variable from '../variables'
import { Container, Paragraph, Band, BandSplit } from '../Atoms'
import PopOut from '../Molecules/Popout'

import ColumnsOne from '../Organisms/ColumnsOne'
import CardsCarousel from '../Organisms/CardsCarousel'

const PostTemplate = ({ data }) => (
  <Layout>
    <Helmet>
        <title>{ data.strapiPost.title } || { data.site.siteMetadata.title }</title>
        <meta name="description" content={ data.strapiPost.excerpt } />
    </Helmet>
    <Container>
      <h1>{data.strapiPost.title}</h1>
      <div>{data.strapiPost.content}</div>
    </Container>
    <br/>
    <Band id="recent-news"
      textColor="white"
      backgroundColor={variable.BRAND_HILIGHT}>
      <CardsCarousel
        posts={data.allStrapiPost.edges}
        heading="More News"
        content="Recent news about Mike Oldfield from the press and sites around the web."
     />
    </Band>
    <BandSplit 
      id="intro" 
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop={variable.BRAND_HILIGHT}>
      <PopOut>
        <ColumnsOne
          narrowView
          textAlign={'center'}
          textColor='white'
          col1={{
            heading: 'Featured Discovery',
            content:
              <>
                  <Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</Paragraph>
                  <iframe src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </>
          }}
        />
      </PopOut>
    </BandSplit>
  </Layout>
  
)

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      createdAt
    }
    site {
      siteMetadata {
        title
      }
    }
    allStrapiPost(limit:5) {
      edges {
        node {
          title
          content
          slug
          id
        }
      }
    }
  }
`
