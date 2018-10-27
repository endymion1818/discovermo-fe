import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import * as atom from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'
import Link from '../components/Molecules/Link'
import Button from '../components/Molecules/Button'

// Organisms
import ColumnsTwo from '../components/Organisms/ColumnsTwo'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Masthead from '../components/Organisms/Masthead'

const Album = styled.article``

export const frontmatter = {
  title: "Albums",
  path: "album",
  description: "Discography of Mike Oldfield albums",
  inMainNav: true,
  menuOrder: 2
}

export default (props) => (
  <Layout>
    <Helmet>
      <title>Albums | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="Discover the music of Mike Oldfield - playlists, news, articles, and selected tracks hilighted and analysed regularly." />
    </Helmet>

    <Masthead
        title="Albums"
        intro="Catalogue of Mike Oldfield's studio albums"
        textColor={variable.BRAND_SECONDARY}
    />

    <atom.Band
      id="postlist"
      backgroundColorBottom={variable.BRAND_SECONDARY}
    >
    <atom.Container>
    { props.data.allStrapiAlbum.edges.map(item => (
      <ColumnsTwo key={item.id} id={item.node.title}
        col1={{
          imageUrl: item.node.coverimg,
          imageAlt: item.node.title
        }}
        col2={{
          content: 
          <Album>
            <h3><Link to={withPrefix("/album/" + item.node.slug)}>{ item.node.title }</Link></h3>
            <atom.Paragraph>{item.node.about}</atom.Paragraph>
            <atom.Paragraph><small>Year Published: { item.node.yearpublished }</small></atom.Paragraph>
            <atom.ButtonGrid>
              {item.node.itunes ? <Button transparent to={item.node.itunes}>Listen on iTunes</Button> : null }
              {item.node.amazon ? <Button transparent to={item.node.amazon}>Buy or listen on Amazon</Button> : null }
              {item.node.googleplay ? <Button transparent to={item.node.googleplay}>Listen on Google Play</Button> : null }
            </atom.ButtonGrid>
          </Album>
        }}
        />
    ))}
    </atom.Container>
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
        title="Ommadawn playlist"
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
query albumPageQuery {
  allStrapiAlbum(
    sort: {fields: [yearpublished], order: DESC},
  ) {
    edges {
      node {
        title
        slug
        yearpublished
        coverimg
        about
        spotify
        itunes
        googleplay
        amazon
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