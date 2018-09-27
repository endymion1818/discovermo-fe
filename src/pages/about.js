import React from 'react'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link';
import * as atom from '../components/Atoms'

import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "About",
  path: "about",
  description: "About this website, who made it and why.",
  inMainNav: false
}

const about = props => (
  <Layout>
    <atom.HeadingPrimary>About</atom.HeadingPrimary>
    <atom.Paragraph>About This Website.</atom.Paragraph>
    <atom.Band>
        <ColumnsOne
            col1={{
            content: 
                <>
                 test
                </>
            }}
        />
    </atom.Band>
  </Layout>
)

export default about
