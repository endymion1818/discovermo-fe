import React from 'react'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link';
import * as atom from '../components/Atoms'

export const frontmatter = {
  title: "404",
  path: "404",
  description: "Page not found",
  inMainNav: false
}

const NotFoundPage = () => (
  <Layout>
    <atom.HeadingPrimary>NOT FOUND</atom.HeadingPrimary>
    <atom.Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</atom.Paragraph>
    <atom.Paragraph>You might want to check out the <Link to="/sitemap">sitemap</Link>, or go back to the <Link to="/"> homepage</Link>.</atom.Paragraph>
  </Layout>
)

export default NotFoundPage
