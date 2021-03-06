import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from './Layout'
import * as variable from '../variables'
import * as atom from '../Atoms'
import PopOut from '../Molecules/Popout'

import CardsCarousel from '../Organisms/CardsCarousel'

const PostTemplate = ({ data }) => {
  const Body = data.strapiPost.childStrapiPostContent.internal.content
  const parsedBody =JSON.parse(Body)
  return (
  <Layout>
    <Helmet>
      <title>
        {data.strapiPost.Title} || {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.strapiPost.Excerpt} />
    </Helmet>
    <article>
      <atom.Container>
        <h1>{data.strapiPost.Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: parsedBody.contents  }} />
      </atom.Container>
    </article>
    <br />
    <atom.Band
      id="recent-news"
      textColor="white"
      backgroundColor={variable.BRAND_HILIGHT}
    >
      <CardsCarousel
        posts={data.allStrapiPost.edges}
        heading="More News"
        content="Recent news about Mike Oldfield from the press and sites around the web."
      />
    </atom.Band>
    <atom.BandSplit
      id="intro"
      bufferTop="0"
      backgroundColorBottom={variable.BRAND_SECONDARY}
      backgroundColorTop={variable.BRAND_HILIGHT}
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
        <iframe src="https://open.spotify.com/embed/playlist/2LTvgOeaIGYIScTO5QjyJi" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"/>
      </PopOut>
    </atom.BandSplit>
  </Layout>
)}

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      Title
      childStrapiPostContent {
        internal {
          content
        }
      }
      Excerpt
      created_at
    }
    site {
      siteMetadata {
        title
      }
    }
    allStrapiPost(limit: 5, sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          Title
          Slug
          id
          created_at(formatString: "DD MMMM YYYY")
          Excerpt
        }
      }
    }
  }
`
