import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'

import * as variable from '../variables'
import { Container, Paragraph, Band, BandSplit } from '../Atoms'
import PopOut from '../Molecules/Popout'
import ColumnsOne from '../Organisms/ColumnsOne'
import ColumnsTwo from '../Organisms/ColumnsTwo'

const DiscoveryTemplate = ({ data }) => (
  <>
    <Helmet>
        <title>{ data.strapiDiscovery.title } | { data.site.siteMetadata.title }</title>
        <meta name="description" content={ data.strapiDiscovery.about } />
    </Helmet>
    <Container>
      <ColumnsTwo
        col1={{
          heading: data.strapiDiscovery.title,
          content: data.strapiDiscovery.description
        }}
        col2={{
          content: 
            <div dangerouslySetInnerHTML={{ __html: data.strapiDiscovery.spotify_playlist }}/>
        }}
      />
    </Container>
    <br/>
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
  </>
  
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
