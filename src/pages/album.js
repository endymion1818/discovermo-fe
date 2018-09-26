import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/Templates/Layout'

// Atoms & Variables
import * as variable from '../components/variables'
import {Container, Paragraph, Band, BandSplit } from '../components/Atoms'

// Molecules
import PopOut from '../components/Molecules/Popout'
import Link from '../components/Molecules/Link'
import Button from '../components/Molecules/Button'

// Organisms
import ColumnsOne from '../components/Organisms/ColumnsOne'
import ColumnsTwo from '../components/Organisms/ColumnsTwo'
import ColumnsThree from '../components/Organisms/ColumnsThree'
import Masthead from '../components/Organisms/Masthead'

const Album = styled.article``

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

export const frontmatter = {
  title: "Albums",
  path: "album",
  description: "Discography of Mike Oldfield albums",
  inMainNav: true
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

    <Band
      id="postlist"
      backgroundColorBottom={variable.BRAND_SECONDARY}
    >
    <Container>
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
            <Paragraph>{item.node.about}</Paragraph>
            <Paragraph><small>Year Published: { item.node.yearpublished }</small></Paragraph>
            <ButtonGrid>
              {item.node.spotify ? <Button transparent to={item.node.spotify}>Listen via Spotify</Button> : null }
              {item.node.itunes ? <Button transparent to={item.node.itunes}>Listen on iTunes</Button> : null }
              {item.node.amazon ? <Button transparent to={item.node.amazon}>Buy or listen on Amazon</Button> : null }
              {item.node.googleplay ? <Button transparent to={item.node.googleplay}>Listen on Google Play</Button> : null }
            </ButtonGrid>
          </Album>
        }}
        />
    ))}
    </Container>
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
      bufferBottom={variable.QUAD}>
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