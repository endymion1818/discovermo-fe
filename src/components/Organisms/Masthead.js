import React from 'react'
import Styled from 'styled-components'
import Link from '../Molecules/Link'
import * as variable from '../variables'
import {Container, Paragraph, HeadingPrimary} from '../Atoms'


const StyledMasthead = Styled.div`
    background-color: ${variable.BRAND_PRIMARY_LIGHT};
    ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
    ${props =>
      props.textAlign
        ? `text-align: ${props.textAlign};`
        : null }
    ${props =>
      props.backgroundimg
        ? `background-image: url(${props.backgroundimg})
    background-size:cover;
    background-position: right top;`
        : null}
    background-position:50% 0%;
    background-size:cover;
    padding-top: ${props => (props.buffer ? props.buffer : '2.5r')}em;
    padding-bottom: ${props => (props.buffer ? props.buffer : '0.563r')}em;

    &.deepPad {
        padding-bottom: 6.563rem;
        padding-top: 6.563rem;
      }

    @media (min-width: ${variable.BREAK_PHONE}) {
        background-position:50% 0%;
        background-size:cover;
        > * {
            margin-left: 1.438rem
            max-width: 60%;
        }
    }

    @media (min-width: ${variable.BREAK_DESKTOP}) {
      ${props =>
      props.backgroundimgDesktop
        ? `background-image: url(${props.backgroundimgDesktop})
            background-size:cover;
            background-position: right top;`
        : null}
        padding-top: ${props => (props.buffer ? props.buffer : '2.938r')}em;
        padding-bottom: ${props => (props.buffer ? props.buffer : '1.813r')}em;

        margin-top: -4rem;
        margin: 0 auto;

        > * {
            margin-left: 3rem
            max-width: 64em;
        }
    }
`

const Masthead = ({...props }) => (
  <StyledMasthead {...props}>
    <Container>
      {props.breadcrumb ? props.breadcrumb : null}
      <HeadingPrimary>{props.title}</HeadingPrimary>
      {props.intro ? <Paragraph>{props.intro}</Paragraph> : null}
      {props.byline ? <Paragraph>{props.byline}</Paragraph> : null}
      {props.linkText ? (
        <Paragraph>
          {props.linkIntro}{' '}
          <Link to={props.linkHref}>
            {props.linkText}
          </Link>
        </Paragraph>
      ) : null}
    </Container>
  </StyledMasthead>
)
export default Masthead
