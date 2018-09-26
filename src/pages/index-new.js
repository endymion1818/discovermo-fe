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
import Button from '../components/Molecules/Button';

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
                <div>
                  <img src={DiscoveryDawn} width="200"/>
                  <atom.Paragraph>The Dawn Playlist</atom.Paragraph>
                </div>
            }}
            col2={{
              content:
                <div>
                  <img src={DiscoveryIbiza} width="200"/>
                  <atom.Paragraph>The Dawn Playlist</atom.Paragraph>
                </div>
            }}
        />
        <ColumnsTwo
          textAlign={'center'}
            col1={{
              content:
                <div>
                  <img src={DiscoveryIslands} width="200"/>
                  <atom.Paragraph>The Dawn Playlist</atom.Paragraph>
                </div>
            }}
            col2={{
              content:
                <div>
                  <img src={DiscoveryCrises} width="200"/>
                  <atom.Paragraph>The Dawn Playlist</atom.Paragraph>
                </div>
            }}
        />
    </atom.Band>

    <atom.BandSplit id="concert-videos"
      backgroundColorBottom={variable.BRAND_PRIMARY_LIGHT}>
      <PopOut textColor="white">
        <ColumnsThree
            heading="Concert Recordings"
            col1={{
            content: <Video embedCode={'nko3_1dMJf8'}/>
            }}
            col2={{
            content: <Video embedCode={'FNsFo2X0SFo'}/>
            }}
            col3={{
            content: <Video embedCode={'RNaZmX-NmQo'}/>
            }}
        />
      </PopOut>
    </atom.BandSplit>


    <atom.Band id="who-is-he" backgroundColor={variable.BRAND_PRIMARY_LIGHT}>
      <ColumnsThree
        heading="Who Is Mike Oldfield?"

        col1={{
          heading: "Sublime Composer",
          content: "Mike Oldfield has composed music in many genres, from prog rock to folk to new age and back again.",
          link: "/",
          linkText: "Featured Compositions"
        }}

        col2={{
          heading: "Multi Instrumentalist",
          content: "As well as composing incredibly satisfying music, Mike often produces and plays all instruments himself.",
          link: "/",
          linkText: "Mike Oldfield Plays ..."
        }}

        col3={{
          heading: "Game Designer",
          content: "Always seeking new ways of immersing listeners in the experience of his music, Mike has designed and published several non-violent games featuring his music.",
          link: "/",
          linkText: "The Games of Mike Oldfield"
        }}
      />
    </atom.Band>


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