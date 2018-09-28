import React from 'react'
import Helmet from 'react-helmet'
import * as variable from '../components/variables'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link'
import * as atom from '../components/Atoms'

import Masthead from '../components/Organisms/Masthead'
import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "About",
  path: "about",
  description: "A little bit about this site, who made it, and why.",
  inMainNav: false,
  menuOrder: 1,
  categories: [
    'insitemenu',
  ]
}

const NotFoundPage = props => (
  <Layout>
    <Helmet>
      <title>Links | { props.data.site.siteMetadata.title }</title>
      <meta name="description" content="A little bit about this site, who made it, and why." />
    </Helmet>
    <Masthead
        title="About"
        intro="A little bit about this site, who made it, and why."
        textColor={variable.BRAND_SECONDARY}
    />
    <atom.Band>
        <ColumnsOne
            narrowView
            col1={{
            content: 
                <>
                    <atom.HeadingSecondary>About Mike Oldfield</atom.HeadingSecondary>
                    <atom.Paragraph>
                      I've been listening to the music of Mike Oldfield for more than 20 years, and I just can't seem to stop. Mike Oldfield's first album, Tubular Bells, was an instant hit in 1979 when he was only 19.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      Since then, Mike's career has taken many twists and turns, as he takes us on a musical journey through many different genres and styles, from classical to new age, to Dance / Trance and folk music.  
                    </atom.Paragraph>
                    <atom.Paragraph>
                      That being the case, Mike Oldfield is an artist who isn't easy to define, and sometimes can be more challenging to get into. Which is exactly why I made this website.
                    </atom.Paragraph>
                    <atom.HeadingSecondary>About This Website</atom.HeadingSecondary>
                    <atom.Paragraph>
                      This website was made by <Link to="https://deliciousreverie.co.uk">Benjamin Read</Link>, a web developer, designer, writer and tinkerer from the UK. I wanted to make a site that would help new fans get to know Mike Oldfield, as a way of introducing Mike to a new audience of younger, perhaps less patient listeners, who nonetheless wanted an idea of where to start.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      To that end, the site attempts to break down some of the music of Mike Oldfield into broad (sometimes oversimplified) categories, in the hopes that someone who has started listening to one style can explore that particular style more easily.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      My hope is that it will help you investigate and come to enjoy Mike Oldfield's music over the next many decades.
                    </atom.Paragraph>
                    <atom.HeadingSecondary>Design &amp; Content</atom.HeadingSecondary>
                    <atom.Paragraph>
                      I designed this website and wrote the content in my spare evenings and weekends, usually after the kids had gone to bed. Design was done mostly in the Sketch-like UI layout tool <Link to="https://figma.com">Figma</Link> with some work in GIMP to alter bitmap graphics.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      The layout is set on a 12-column grid. I don't find any other grid systems adequate. The design shares some DNA with a development project I was involved with recently.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      The typeface, the largest design aspect of any website, is Exo, a free font by Natanael Gama. You can view his beautiful craftwork at <a href="http://www.ndiscovered.com/">http://www.ndiscovered.com/</a>
                    </atom.Paragraph>
                    <atom.HeadingSecondary>Technical Details</atom.HeadingSecondary>
                    <atom.Paragraph>
                      <strong>Frontend: </strong> The front end, or display, part of this site is built with <Link to="https://gatsbyjs.org">GatsbyJS</Link>, a modern JavaScript framework for creating single-page applications that render on the server and rehydrate on the client. This part of the website is hosted on <Link to="https://netlify.com">Netlify</Link>.
                    </atom.Paragraph>
                    <atom.Paragraph>
                      <strong>Backend: </strong> The back end, or server code that supplies the data, is an api that allows me to write articles in a friendly graphical interface. It's built with <Link to="https://strapi.io/">Strapi</Link>, a modern CMS that is completely headless and only provides an API endpoint. It's hosted on Heroku with a MongoDB database hosted by <Link to="https://mlab.com/">MLab</Link>.
                    </atom.Paragraph>
                    <atom.Paragraph>The whole application, frontend, backend and database, is hosted for free.</atom.Paragraph>
                </>
            }}
        />
    </atom.Band>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
query aboutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`