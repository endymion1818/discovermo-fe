import styled from 'styled-components'
import * as variable from './variables'

export const Band = styled.section`
    padding-top: ${props =>
      props.buffer
        ? props.buffer
        : props.bufferTop
          ? props.bufferTop
          : variable.PADDING_DEFAULT_TOP};
    padding-bottom: ${props =>
      props.buffer
        ? props.buffer
        : props.bufferBottom
          ? props.bufferBottom
          : variable.PADDING_DEFAULT_BOTTOM};
    ${props =>
      props.backgroundimg
        ? `background-image: url(${props.backgroundimg})
    background-size:cover;
    background-position: right top;`
        : null}

    ${props =>
      props.backgroundColor
        ? `background-color: ${props.backgroundColor}`
        : null}

    @media (min-width: ${variable.BREAKPOINT_MD}) {

    }
`

export const Container = styled.div`
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;

  ${props => (props.backgroundimg ? `background-image: url(${props.backgroundimg})
    background-size:cover;
    background-position: right top;` : null)}
    
    ${props => (props.backgroundColor ? `background-color: ${props.backgroundColor}` : null)}

    @media all and (min-width: ${variable.BREAKPOINT_SM}) {
      max-width: ${variable.TEXT_CONTENT_MAX_WIDTH};
      margin: 0 auto;
      padding-left: 2rem;
      padding-right: 2rem;
    }

  @media all and (min-width: ${variable.BREAKPOINT_MD}) {
    max-width: ${variable.TEXT_CONTENT_MAX_WIDTH_MD};
    margin: 0;
    margin: 0 auto;
  }
`

export const Column = styled.div`
  display: inline-block;
  float: left;
  width: 100%;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  margin-top:2em;

  &:first-of-type{
   margin-top:0em;
  }

  @media (min-width: ${variable.BREAKPOINT_MD}) {
    width: ${props => (props.size ? (props.size / 12) * 100 : 100)}%;
  }
`

export const Row = styled.div`
  overflow: auto;
  padding: 0 0em;

  ${Column} {
    padding: 0 0.5em;
    @media (min-width: ${variable.BREAKPOINT_MD}) {
      padding: 0 ${props => (props.columnBuffer ? props.columnBuffer : 0.5)}em;
    }
    @media (min-width: ${variable.BREAKPOINT_SM_Phone}) {
      padding: 0 ${props => (props.columnBuffer ? props.columnBuffer : 0.5)}em;
    }
  }

  ${Column}:first-child {
    padding-left: 0.5em;
    float: ${props => props.swapColumns ? 'right' : 'left' }
 }
  }

  ${Column}:last-child {
    padding-right: 0.5em;
  }
`


export const HeadingMain = styled.h1`
  font-size: 2em;
  font-weight: bold;
`

export const HeadingSecondary = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
`

export const HeadingTertiary = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
`

export const Paragraph = styled.p`
color: ${props => props.textColor ? props.textColor : '#000000' } 
  margin-bottom: ${variable.MARGIN_MAIN};

  & small {
    color: ${variable.COLOR_TEXT_ON_GREY_BG};
  }
  > a {
    color: ${variable.COLOR_PRIMARY_HOVER};
    text-decoration: underline;

    &:hover,
    &:active,
    &:focus {
      color: ${variable.COLOR_PRIMARY_HOVER2};
    }
  }
`
export const LargeView = styled.div`
  display: none;
  @media (min-width: ${variable.BREAK_DESKTOP}) {
    display: block;
  }
`
export const SmallView = styled.div`
  display: block;
  @media (min-width: ${variable.BREAK_DESKTOP}) {
    display: none;
  }
`