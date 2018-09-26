import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import * as atom from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsTwo from '../components/Organisms/ColumnsTwo'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Button from '../components/Molecules/Button'
import Link from '../components/Molecules/Link'

// Organisms
import Video from '../components/Organisms/Video'
import CardsCarousel from '../components/Organisms/CardsCarousel'
import HomeHero from '../components/Partials/HomeHero'

// This page graphics
import DiscoveryDawn from '../img/discovery-dawn.svg'
import DiscoveryCrises from '../img/discovery-crises.svg'
import DiscoveryIslands from '../img/discovery-islands.svg'
import DiscoveryIbiza from '../img/discovery-ibiza.svg'

export const frontmatter = {
  title: "Home",
  path: "/index-new",
  description: "Home Page",
  inMainNav: true,
  menuOrder: 1
}

export default (props) => (
  <Layout>
    <Helmet>
      <title>Home | {props.data.site.siteMetadata.title} </title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly." />
    </Helmet>

    <HomeHero/>

    <atom.BandSplit 
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
                <atom.Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</atom.Paragraph>
                <iframe src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </>
          }}
        />
      </PopOut>
    </atom.BandSplit>

    <atom.Band id="about-mike" 
      backgroundColor={variable.BRAND_SECONDARY} 
      textColor={'white'}
      bufferBottom={variable.QUAD} >
      <ColumnsThree
        textColor="white"
        heading="More Recent Discoveries"

        col1={{
          heading: "The Classical Mike Oldfield",
          content: 
            <>
              <atom.Paragraph>
                Some of Mike's most sublime creations are his classical works. From the recent hit album, Music of the Spheres, to the little-known and underappreciated wonder Mont St Michael, here are a few classical selections to get your ears tingling ...
              </atom.Paragraph>
              <Button white to="/discovery/classical-mike-oldfield">Discover Classical</Button>
            </>
        }}

        col2={{
          heading: "Ibiza Influences",
          content: 
          <>
            <atom.Paragraph>Inspired by the nightclub scene in his then home of Ibiza, this Discovery showcases some of Mike's best work that has been influenced and inspired by dance, trance and house music.
            </atom.Paragraph>
            <Button white to="/discovery/ibiza-influences">Discover Ibiza</Button>
          </>
        }}

        col3={{
          heading: "Genesis",
          content: 
          <>
            <atom.Paragraph>Mike's early music inspired a generation, because it was so unexpected, new and original. Mike was only 19 when he recorded the hit album Tubular Bells. He went on to create four more albums in this vein, all of them spectacularly original.
            </atom.Paragraph>
            <Button white to="/discovery/mike-oldfield-genesis">Discover Genesis</Button>
          </>
        }}
      />
    </atom.Band>


    <atom.Band id="elements-mike-oldfield">
        <ColumnsOne
          narrowView='true'
          textAlign={'center'}
          textColor={variable.BRAND_PRIMARY}
          col1={{
            heading: 'Elements of Mike Oldfield',
            content:
              <div>
                <atom.Paragraph>The concept of ‘Elements’ groups Mike’s music into several categories which we hope wil help you discover more of his work.</atom.Paragraph>
                <atom.Paragraph>Whilst it’s really impossible to segment any artists’ work in such a stringent way, we wanted to find a way to make Mike Oldfield’s music more accessible to an audience unfamiliar with his work.</atom.Paragraph>
                <atom.Paragraph>Each ‘Element’ takes a group of albums that seem to share some familiar qualities and tone. For example, Mike Oldfield’s first 3 albums (“Tubular Bells”, “Hergest Ridge”  and “Ommadawn”) have a similar musical structure and tone of voice.</atom.Paragraph>
                <atom.Paragraph>So these albums we refer to as the “dawn” series.',</atom.Paragraph>
              </div>
          }}
        />
        <ColumnsTwo
          textAlign={'center'}
            col1={{
              content:
                <Link to="/discovery/mike-oldfield-genesis">
                  <img src={DiscoveryDawn} width="200"/>
                  <atom.Paragraph>The Dawn Playlist</atom.Paragraph>
                </Link>
            }}
            col2={{
              content:
              <Link to="/discovery/crises">
                <img src={DiscoveryCrises} width="200"/>
                <atom.Paragraph>The Crises Playlist</atom.Paragraph>
              </Link>
            }}
        />
        <ColumnsTwo
          textAlign={'center'}
            col1={{
              content:
              <Link to="/discovery/ibiza-collection">
                <img src={DiscoveryIbiza} width="200"/>
                <atom.Paragraph>The Ibiza Playlist</atom.Paragraph>
              </Link>
            }}
            col2={{
              content:
              <Link to="/discovery/islands-collection">
                <img src={DiscoveryIslands} width="200"/>
                <atom.Paragraph>The Islands Playlist</atom.Paragraph>
              </Link>
            }}
        />
    </atom.Band>

    <atom.BandSplit id="concert-videos"
      backgroundColorBottom={variable.BRAND_HILIGHT}>
      <PopOut textColor="white">
        <ColumnsThree
            heading="Concert Recordings"
            content="Selected from the Mike Oldfield fan community, these 3 recordings showcase the fan's favourite concert recordings."
            col1={{
            content: <Video embedCode={'-kEK-37BMEA'}/>
            }}
            col2={{
            content: <Video embedCode={'kKYh-7o3KzA'}/>
            }}
            col3={{
            content: <Video embedCode={'q7U1fvpuWWU'}/>
            }}
        />
      </PopOut>
    </atom.BandSplit>


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

export const query = graphql`
query indexQuery {
  allStrapiPost(limit:5) {
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