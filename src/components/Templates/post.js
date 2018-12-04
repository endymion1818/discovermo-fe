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

import CardsCarousel from '../Organisms/CardsCarousel'

const PostTemplate = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {data.strapiPost.title} || {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.strapiPost.excerpt} />
    </Helmet>
    <atom.Container>
      <atom.Row>
        <atom.Column size="8">
          <h1>{data.strapiPost.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: unified()
                .use(markdown)
                .use(html)
                .processSync(data.strapiPost.content),
            }}
          />
        </atom.Column>
      </atom.Row>
    </atom.Container>
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

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      createdAt
    }
    site {
      siteMetadata {
        title
      }
    }
    allStrapiPost(limit: 5, sort: { fields: [createdAt], order: DESC }) {
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
  }
`
