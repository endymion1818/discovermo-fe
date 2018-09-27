import React from 'react'
import Layout from '../components/Templates/Layout'
import Link from '../components/Molecules/Link';
import * as atom from '../components/Atoms'

import ColumnsOne from '../components/Organisms/ColumnsOne'

export const frontmatter = {
  title: "Links",
  path: "links",
  description: "Sites about Mike Oldfield around the internet",
  inMainNav: false
}

const NotFoundPage = props => (
  <Layout>
    <atom.HeadingPrimary>Links</atom.HeadingPrimary>
    <atom.Paragraph>Sites about Mike Oldfield from around the internet.</atom.Paragraph>
    <atom.Band>
        <ColumnsOne
            col1={{
            content: 
                <>
                    <atom.HeadingSecondary>Official Sites</atom.HeadingSecondary>
                    <ul>
                        <li><a href="https://tubular.net/">Tubular.net - "an open website dedicated to Mike Oldfield. Ingredients: organic fan input, a touch of fresh official news."</a></li>
                        <li><a href="https://www.facebook.com/MikeOldfieldOfficial/">Official Facebook Page</a></li>
                        <li><a href="https://www.youtube.com/user/MikeOldfieldVEVO">YouTube Channel</a></li>
                        <li><a href="https://open.spotify.com/artist/562Od3CffWedyz2BbeYWVn">Spotify channel</a></li>
                    </ul>
                    <atom.HeadingSecondary>Fan Sites</atom.HeadingSecondary>
                    <ul>
                        <li><a href="https://mikeoldfieldofficial.com/">Mike Oldfield Official</a></li>
                        <li><a href="http://www.mikeoldfield.org">Dark Star: The Mike Oldfield Magazine</a></li>
                        <li><a href="http://www.dbennett.karoo.net/">"Yet Another Mike Oldfield Site"</a></li>
                        <li><a href="http://ozwolf.tripod.com/hrcafe.html">Wolf's Hergest Ridge Cafe</a></li>
                    </ul>
                    <atom.HeadingTertiary>Add Yours!</atom.HeadingTertiary>
                    <atom.Paragraph>If I've missed your website, please send me an email to <a href="endymion1818@gmail.com">this address.</a></atom.Paragraph>
                </>
            }}
        />
    </atom.Band>
  </Layout>
)

export default NotFoundPage
