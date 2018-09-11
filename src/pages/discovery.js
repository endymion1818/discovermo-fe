import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import {Paragraph, Band, BandSplit } from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'
import Link from '../components/Molecules/Link'
import Button from '../components/Molecules/Button'

// Organisms
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Masthead from '../components/Organisms/Masthead'

// This page graphics


export default (props) => (
  <Layout>
    <Helmet>
      <title>Discover | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly." />
    </Helmet>

    <Masthead
        title="Posts"
        intro="Mike Oldfield playlists and song analysis"
        textColor={variable.BRAND_SECONDARY}
    />

    <Band
      id="postlist"
      backgroundColorBottom={variable.BRAND_SECONDARY}
    >
      <ColumnsOne
        narrowView
        col1={{
          content: 
            <>
              { props.data.allStrapiDiscovery.edges.map(item => (
                <div key={item} id={item.node.title}>
                  <h3><Link to={'/discovery/' + item.node.Slug}>{ item.node.title }</Link></h3>
                  <Paragraph>{item.node.excerpt}</Paragraph>
                  <Paragraph><small>published on: {item.node.createdAt}</small></Paragraph>
                  <Button transparent to={'/discovery/' + item.node.Slug}>Read this post</Button>
                  <hr/>
                </div>
              )) 
              }
            </>
        }}
      />
    </Band>

    <BandSplit 
      id="intro" 
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop="transparent">
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

    <Band id="about-mike" 
      backgroundColor={variable.BRAND_SECONDARY} 
      textColor={'white'}
      bufferBottom={variable.QUAD} >
      <ColumnsThree
        textColor="white"
        heading="More Recent Discoveries"

        col1={{
          heading: "The Classical Mike Oldfield",
          content: "Some of Mike's most sublime creations are his classical works. From the recent hit album, Music of the Spheres, to the little-known and underappreciated wonder Mont St Michael, here are a few classical selections to get your ears tingling ...",
          link: "/",
          linkText: "Discover Classical"
        }}

        col2={{
          heading: "Ibiza Influences",
          content: "Inspired by the nightclub scene in his then home of Ibiza, this Discovery showcases some of Mike's best work that has been influenced and inspired by dance, trance and house music.",
          link: "/",
          linkText: "Discover Ibiza"
        }}

        col3={{
          heading: "Origins",
          content: "Mike's early music inspired a generation, because it was so unexpected, new and original. Mike was only 19 when he recorded the hit album Tubular Bells. He went on to create four more albums in this vein, all of them spectacularly original.",
          link: "/",
          linkText: "Discover Origins"
        }}
      />
    </Band>

  </Layout>
)

export const query = graphql`
query homeDiscoveryQuery {
  allStrapiDiscovery {
    edges {
      node {
        id
        Slug
        title
        description
        spotify_playlist
        vimeo_video
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