import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'

import PopOut from '../Molecules/Popout'
import Button from '../Molecules/Button'
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
          content: 
           <>
            <atom.Paragraph>{data.strapiAlbum.about}</atom.Paragraph>
            <atom.ButtonGrid>
              {data.strapiAlbum.itunes ? <Button transparent to={data.strapiAlbum.itunes}>Listen on iTunes</Button> : null }
              {data.strapiAlbum.amazon ? <Button transparent to={data.strapiAlbum.amazon}>Buy or listen on Amazon</Button> : null }
              {data.strapiAlbum.googleplay ? <Button transparent to={data.strapiAlbum.googleplay}>Listen on Google Play</Button> : null }
            </atom.ButtonGrid>
            <br/>
            <atom.SpotifyViewer dangerouslySetInnerHTML={{ __html:data.strapiAlbum.spotify }}></atom.SpotifyViewer>
           </>
        }}
      />
    </atom.Container>
    <br/>
    <atom.BandSplit 
      id="intro" 
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop={'transparent'}>
      <PopOut NarrowView>
        <atom.HeadingSecondary textColor="white">
            Featured Discovery
        </atom.HeadingSecondary>
        <atom.Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</atom.Paragraph>
        <atom.Paragraph textColor="white">This short excerpt is a stirring introduction to the much longer original work. We've also added a bonus: listen to a selection of work from the recently released "Return to Ommadawn"</atom.Paragraph>
        <iframe src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi" width="100%" height="240" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
