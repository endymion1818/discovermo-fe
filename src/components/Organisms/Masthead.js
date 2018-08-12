import React, { Component } from 'react'
import Styled from 'styled-components'
import Link from '../Molecules/Link'
// import mastheadBgDt from '../../assets/images/masthead_bg_dt.png'
// import mastheadBgMob from '../../assets/images/masthead_bg_mob.png'
import * as variable from '../variables'

import cx from '../../../../../.cache/typescript/2.9/node_modules/@types/classnames'

const StyledMasthead = Styled.div`
    background-color: ${variable.COLOR_DARKBLUE} ;
    color: #ffffff;
    /* background-image:url(${mastheadBgDt}); */
    background-position:50% 0%;
    background-size:cover;
    padding-top: ${props => (props.buffer ? props.buffer : '5.5r')}em;
    padding-bottom: ${props => (props.buffer ? props.buffer : '2.563r')}em;

    &.deepPad {
        padding-bottom: 6.563rem;
        padding-top: 6.563rem;
      }

    @media (min-width: ${variable.BREAKPOINT_SM}) {
        /* background-image:url(${mastheadBgMob}); */
        background-position:50% 0%;
        background-size:cover;
        > * {
            margin-left: 1.438rem
            max-width: 60%;
        }
    }

    @media (min-width: ${variable.BREAKPOINT_MD}) {
        background-image:url(${mastheadBgDt});
        background-position:50% 50%;
        background-size:cover;
        padding-top: ${props => (props.buffer ? props.buffer : '4.938r')}em;
        padding-bottom: ${props => (props.buffer ? props.buffer : '5.813r')}em;

        margin-top: -4rem;
        margin: 0 auto;

        > * {
            margin-left: 3rem
            max-width: 64em;
        }
    }
`

const Masthead = ({ deepPad, ...props }) => (
  <StyledMasthead {...props} className={cx({ deepPad })}>
    <div>
      {props.breadcrumb ? props.breadcrumb : null}
      <Title textColor={'#ffffff'}>{props.title}</Title>
      {props.intro ? <Paragraph>{props.intro}</Paragraph> : null}
      {props.byline ? <Paragraph>{props.byline}</Paragraph> : null}
      {props.linkText ? (
        <Paragraph>
          {props.linkIntro}{' '}
          <Link style={{ color: `#ffffff` }} to={props.linkHref}>
            {props.linkText}
          </Link>
        </Paragraph>
      ) : null}
    </div>
  </StyledMasthead>
)
export default Masthead
