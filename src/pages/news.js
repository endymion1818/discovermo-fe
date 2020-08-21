import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import * as atom from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'
import Link from '../components/Molecules/Link'
import Button from '../components/Molecules/Button'

// Organisms
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Masthead from '../components/Organisms/Masthead'

// This page graphics

export const frontmatter = {
  title: "News",
  path: "news",
  description: "News about Mike Oldfield from around the web.",
  inMainNav: true,
  menuOrder: 3
}

export default (props) => (
  <Layout>
    <Helmet>
      <title>News | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly." />
    </Helmet>

    <Masthead
        title="News"
        intro="Mike Oldfield related and website news"
        textColor={variable.BRAND_SECONDARY}
    />

    <atom.Band
      id="postlist"
      backgroundColorBottom={variable.BRAND_SECONDARY}
    >
      <ColumnsOne
        narrowView
        col1={{
          content: 
            <>
              { props.data.allStrapiPost.edges.map(item => (
                <div key={item} id={item.node.Title}>
                  <h3><Link to={'/news/' + item.node.Slug}>{ item.node.title }</Link></h3>
                  <atom.Paragraph>{item.node.Excerpt}</atom.Paragraph>
                  <atom.Paragraph><small>published on: {item.node.created_at}</small></atom.Paragraph>
                  <Button transparent to={'/news/' + item.node.Slug}>Read this post</Button>
                  <hr/>
                </div>
              )) 
              }
            </>
        }}
      />
    </atom.Band>

    <atom.BandSplit 
      id="intro" 
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop="transparent">
      <PopOut NarrowView>
        <atom.HeadingSecondary textColor="white">
            Featured Discovery
        </atom.HeadingSecondary>
        <atom.Paragraph textColor="white">Recently voted by fans on the Mike Oldfield Facebook page as their favourite album of all time, Ommadawn is undoubtably Mike Oldfield at his best.</atom.Paragraph>
        <atom.Paragraph textColor="white">This short excerpt is a stirring introduction to the much longer original work. We've also added a bonus: listen to a selection of work from the recently released "Return to Ommadawn"</atom.Paragraph>
        <iframe 
        title="Spotify Playlist: Ommadawn"
        src="https://open.spotify.com/embed/user/1138668487/playlist/2LTvgOeaIGYIScTO5QjyJi" width="100%" height="240" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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

  </Layout>
)

export const query = graphql`
query homePostQuery {
  allStrapiPost(
          sort: {fields: [created_at], order: DESC},
    ) {
    edges {
      node {
        Title
        Excerpt
        Slug
        created_at(formatString: "DD MMMM YYYY")
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