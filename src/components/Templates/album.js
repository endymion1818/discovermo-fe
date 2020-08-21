import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'

import PopOut from '../Molecules/Popout'
import Button from '../Molecules/Button'
import ColumnsTwo from '../Organisms/ColumnsTwo'

const AlbumTemplate = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {data.strapiAlbum.Title} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.strapiAlbum.Excerpt} />
    </Helmet>
    <atom.Container>
      <ColumnsTwo
        col1={{
          content: (
            <img src={data.strapiAlbum.Cover.publicURL} width="100%"/>
          )
        }}
        col2={{
          heading: data.strapiAlbum.Title,
          content: (
            <>
              <div
                dangerouslySetInnerHTML={{
                  __html: unified()
                    .use(markdown)
                    .use(html)
                    .processSync(data.strapiAlbum.Body),
                }}
              />
              <atom.ButtonGrid>
                {data.strapiAlbum.iTunes ? (
                  <Button transparent to={data.strapiAlbum.iTunes}>
                    Listen or buy on iTunes
                  </Button>
                ) : null}
                {data.strapiAlbum.Amazon ? (
                  <Button transparent to={data.strapiAlbum.Amazon}>
                    Buy or listen on Amazon
                  </Button>
                ) : null}
                {data.strapiAlbum.GooglePlay ? (
                  <Button transparent to={data.strapiAlbum.GooglePlay}>
                    Listen on Google Play
                  </Button>
                ) : null}
                {data.strapiAlbum.Spotify ? (
                  <Button transparent to={data.strapiAlbum.Spotify}>
                    Listen on Spotify
                  </Button>
                ) : null}
              </atom.ButtonGrid>
              <br />
            </>
          ),
        }}
      />
    </atom.Container>
    <br />
    <atom.BandSplit
      id="intro"
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop={'transparent'}
    >
      <PopOut NarrowView>
        <atom.HeadingSecondary textColor="white">
          Featured Discovery
        </atom.HeadingSecondary>
        <atom.Paragraph textColor="white">
          Recently voted by fans on the Mike Oldfield Facebook page as their
          favourite album of all time, Ommadawn is undoubtably Mike Oldfield at
          his best.
        </atom.Paragraph>
        <atom.Paragraph textColor="white">
          This short excerpt is a stirring introduction to the much longer
          original work. We've also added a bonus: listen to a selection of work
          from the recently released "Return to Ommadawn"
        </atom.Paragraph>
        <iframe
          title="ommadawn playlist"
          src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi"
          width="100%"
          height="240"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </PopOut>
    </atom.BandSplit>
  </Layout>
)

export default AlbumTemplate

export const query = graphql`
  query AlbumTemplate($id: String!) {
    strapiAlbum(id: { eq: $id }) {
      Title
      Slug
      Published
      Cover {
        publicURL
      }
      Body
      Spotify
      GooglePlay
      Amazon
      iTunes
    }
    site {
      siteMetadata {
        title
      }
    }
    allStrapiAlbum(limit: 5) {
      edges {
        node {
          Title
          Slug
          Cover {
            publicURL
          }
        }
      }
    }
  }
`
