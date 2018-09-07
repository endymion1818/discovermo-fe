import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

// Atoms & Variables
import * as variable from '../components/variables'
import {Paragraph, Band, BandSplit } from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'

// Organisms
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsTwo from '../components/Organisms/ColumnsTwo'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Video from '../components/Organisms/Video'
import CardsCarousel from '../components/Organisms/CardsCarousel'
import HomeHero from '../components/Partials/HomeHero'

// This page graphics
import DiscoveryDawn from '../images/discovery-dawn.svg'
import DiscoveryCrises from '../images/discovery-crises.svg'
import DiscoveryIslands from '../images/discovery-islands.svg'
import DiscoveryIbiza from '../images/discovery-ibiza.svg'

export default (props) => (
  <>
    <Helmet>
      <title>Home | { 'site meta title' }</title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly." />
    </Helmet>

    <HomeHero/>

    <BandSplit 
      id="intro" 
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop="#f4791f">
      <PopOut>
        <ColumnsOne
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


    <Band id="elements-mike-oldfield">
        <ColumnsOne
          narrowView='true'
          textAlign={'center'}
          textColor={variable.BRAND_PRIMARY}
          col1={{
            heading: 'Elements of Mike Oldfield',
            content:
              <div>
                <Paragraph>The concept of ‘Elements’ groups Mike’s music into several categories which we hope wil help you discover more of his work.</Paragraph>
                <Paragraph>Whilst it’s really impossible to segment any artists’ work in such a stringent way, we wanted to find a way to make Mike Oldfield’s music more accessible to an audience unfamiliar with his work.</Paragraph>
                <Paragraph>Each ‘Element’ takes a group of albums that seem to share some familiar qualities and tone. For example, Mike Oldfield’s first 3 albums (“Tubular Bells”, “Hergest Ridge”  and “Ommadawn”) have a similar musical structure and tone of voice.</Paragraph>
                <Paragraph>So these albums we refer to as the “dawn” series.',</Paragraph>
              </div>
          }}
        />
        <ColumnsTwo
          textAlign={'center'}
            col1={{
              content:
                <div>
                  <img src={DiscoveryDawn} width="200"/>
                  <Paragraph>The Dawn Playlist</Paragraph>
                </div>
            }}
            col2={{
              content:
                <div>
                  <img src={DiscoveryIbiza} width="200"/>
                  <Paragraph>The Dawn Playlist</Paragraph>
                </div>
            }}
        />
        <ColumnsTwo
          textAlign={'center'}
            col1={{
              content:
                <div>
                  <img src={DiscoveryIslands} width="200"/>
                  <Paragraph>The Dawn Playlist</Paragraph>
                </div>
            }}
            col2={{
              content:
                <div>
                  <img src={DiscoveryCrises} width="200"/>
                  <Paragraph>The Dawn Playlist</Paragraph>
                </div>
            }}
        />
    </Band>

    <BandSplit id="concert-videos"
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
    </BandSplit>


    <Band id="who-is-he" backgroundColor={variable.BRAND_PRIMARY_LIGHT}>
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
    </Band>


    <Band id="discovery-categories"
      backgroundColor={variable.BRAND_HILIGHT}>
      <ColumnsOne
        backgroundColor={variable.BRAND_HILIGHT}
        textColor="#ffffff"
        heading='Elements of Mike Oldfield'
      />
    </Band>


    <Band id="recent-news"
      backgroundColor={variable.BRAND_HILIGHT}>
      <CardsCarousel
        posts={props.data.allStrapiPost.edges}
        content="Recent news about Mike Oldfield from the press and sites around the web."
     />
    </Band>

  </>
)

export const query = graphql`
query homePostQuery {
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