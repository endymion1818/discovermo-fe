import React from 'react'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link';
import * as atom from '../components/Atoms'

import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "Usage & Cookies",
  path: "usage-cookies",
  description: "Contract for using this website and cookie policy.",
  inMainNav: false
}

const usage = props => (
  <Layout>
    <atom.HeadingPrimary>Site Use Policy and Cookie Information</atom.HeadingPrimary>
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

export default usage
