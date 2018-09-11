import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'
import PopOut from '../Molecules/Popout'
import ColumnsOne from '../Organisms/ColumnsOne'
import ColumnsTwo from '../Organisms/ColumnsTwo'

const AlbumTemplate = ({ data }) => (
  <Layout>
    <Helmet>
        <title>{ data.strapiAlbum.title } | { data.site.siteMetadata.title }</title>
        <meta name="description" content={ data.strapiAlbum.about } />
    </Helmet>
    <atom.Container>
      <ColumnsTwo
        col1={{
          imageUrl: data.strapiAlbum.coverimg
        }}
        col2={{
          heading: data.strapiAlbum.title,
          content: data.strapiAlbum.about
        }}
      />
    </atom.Container>
    <br/>
    <atom.BandSplit 
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
                  <atom.Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</atom.Paragraph>
                  <iframe src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </>
          }}
        />
      </PopOut>
    </atom.BandSplit>
  </Layout>
  
)

export default AlbumTemplate

export const query = graphql`
  query AlbumTemplate($id: String!) {
    strapiAlbum(id: { eq: $id }) {
      title
      slug
      yearpublished
      coverimg
      about
      spotify
      googleplay
      amazon
      itunes
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
