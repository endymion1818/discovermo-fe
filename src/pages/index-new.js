import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import * as variable from '../components/variables'
import {Paragraph, Band, BandSplit } from '../components/Atoms'

// Molecules
// import Hero from '../../components/Organisms/Hero'
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsTwo from '../components/Organisms/ColumnsTwo'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import ColumnsFour from '../components/Organisms/ColumnsFour'
import PopOut from '../components/Molecules/Popout'
import Video from '../components/Organisms/Video'
import CardsCarousel from '../components/Organisms/CardsCarousel'
import { graphql } from 'gatsby';


export default (props) => (
  <div>
    <Helmet>
      <title>Home | { 'site meta title' }</title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, articles, selected tracks hilighted and analysed regularly." />
    </Helmet>
    <Band id="intro" buffer={variable.ZERO}>
      <ColumnsOne
        textAlign={'center'}
        textColor={variable.BRAND_HILIGHT}
        col1={{
          heading: 'Featured Discovery',
          content:
            <div>
                <Paragraph>Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</Paragraph>
            </div>
        }}
      />
    </Band>


<Band id="about-mike">
      <ColumnsThree
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
        textAlign={'center'}
        textColor={variable.BRAND_HILIGHT}
        col1={{
          heading: 'Elements of Mike Oldfield',
          content:
            <div>
                <Paragraph>The concept of ‘Elements’ groups Mike’s music into several categories which we
            hope wil help you discover more of his work.</Paragraph>
                <Paragraph>Whilst it’s really impossible to segment any artists’ work in such a stringent way,
            we wanted to find a way to make Mike Oldfield’s music more accessible to an
            audience unfamiliar with his work.</Paragraph>
            <Paragraph>Each ‘Element’ takes a group of albums that seem to share some familiar
            qualities and tone. For example, Mike Oldfield’s first 3 albums (“Tubular Bells”, 
            “Hergest Ridge”  and “Ommadawn”) have a similar musical structure and tone
            of voice.</Paragraph>
            <Paragraph>So these albums we refer to as the “dawn” series.',</Paragraph>
            </div>
        }}
      />
    </Band>


    <BandSplit id="concert-videos"
      backgroundColorTop={variable.BRAND_HILIGHT}
      backgroundColorBottom={variable.BRAND_PRIMARY}>
      <PopOut>
        <ColumnsThree>
            heading="Concert Recordings"
            col1={{
            heading: "Sublime Composer",
            content: <Video link={'https://youtu.be/q7U1fvpuWWU'}></Video>
            }}

            col2={{
            heading: "Multi Instrumentalist",
            content: <Video link={'https://youtu.be/q7U1fvpuWWU'}></Video>
            }}

            col3={{
            heading: "Game Designer",
            content: <Video link={'https://youtu.be/q7U1fvpuWWU'}></Video>
            }}
        </ColumnsThree>
      </PopOut>
    </BandSplit>


    <Band id="recent-news">
      <ColumnsThree
        heading="Who Is Mike Oldfield"

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

  </div>
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