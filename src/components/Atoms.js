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
        ? `background-image: url(${props.backgroundimg});
    background-size:cover;
    background-position: right top;`
        : null}

    background-color: ${props => props.backgroundColor || null };
    color: ${props => props.textColor || null };
    
    a {
      color: ${props => props.textColor || null };
    }
    
    @media (min-width: ${variable.BREAK_DESKTOP}) {
      ${props =>
      props.backgroundimgDesktop
        ? `background-image: url(${props.backgroundimgDesktop});
    background-size:cover;
    background-position: right top;`
        : null}
    }
`


export const BandSplit = styled(Band)`
    position: relative;

    &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        ${props =>
          props.backgroundColorTop
            ? `background-color: ${props.backgroundColorTop};`
            : null }
        z-index: -1;
        right: 0;
        
    }

    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        ${props =>
          props.backgroundColorBottom
            ? `background-color: ${props.backgroundColorBottom};`
            : null }
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

export const Container = styled.div`
  width: 100%;
  max-width: ${variable.CONTAINER_LARGEST};
  padding: 0 ${variable.SINGLE};
  margin: 0 auto;
  ${props => (props.backgroundimg ? `
    background-image: url(${props.backgroundimg})
    background-size: cover;
    background-position: right top;` : null)}
  ${props => (props.backgroundColor ? `
    background-color: ${props.backgroundColor}` : null)}
  @media all and (min-width: ${variable.BREAK_PHONE}) {
    padding: 0 ${variable.DOUBLE};
  }
`

export const Column = styled.div`
  display: inline-block;
  width: 100%;
  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
  margin-top: ${variable.DOUBLE};

  &:first-of-type{
    margin-top: 0;
   }
  @media (min-width: ${variable.BREAK_SMALLEST}) {
    &:first-of-type{
      margin-top: ${variable.DOUBLE};
    }
  }
  @media (min-width: ${variable.BREAK_TABLET}) {
    float: left;
    width: ${props => (props.size ? (props.size / 12) * 100 : 100)}%;
  }
`

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  ${props => 
  props.narrowView 
  ? 
  `width: 80%;
  margin: 0 auto;` 
  : null }
`


export const Row = styled.div`
  overflow: auto;
  padding: 0;

  ${Column} {
    padding: 0 ${variable.HALF};
    @media (min-width: ${variable.BREAK_DESKTOP}) {
      padding: 0 ${props => (props.columnBuffer ? props.columnBuffer : 0.5)}rem;
    }
    @media (min-width: ${variable.BREAK_PHONE}) {
      padding: 0 ${props => (props.columnBuffer ? props.columnBuffer : 0.5)}rem;
    }
  }
  ${Column}:first-child {
    padding-left: ${variable.HALF};
    float: ${props => props.swapColumns ? 'right' : 'left'}
  }
  ${Column}:last-child {
    padding-right: ${variable.HALF};
  }
`

export const RowCenter = styled(Row)`
  display: flex;
  justify-content: center;
`

export const RowGrid = styled.div`

  @media (min-width: ${variable.BREAK_PHONE}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${variable.BREAK_TABLET}) {
    display: grid;
    grid-template-columns: repeat(${props => (props.columns || '100%')}, 1fr);
    grid-gap: ${variable.SINGLEplusHALF};
  }
`


export const HeadingPrimary = styled.h1`
  font-size: 2em;
  font-weight: bold;
  ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
`

export const HeadingSecondary = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }`

export const HeadingTertiary = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }`

export const TextContainer = styled.div`
  margin-bottom: ${variable.SINGLE};
  text-align: ${props => props.textAlign ? props.textAlign : 'inherit' };
  ul, ol {
    margin-left: ${variable.SINGLEplusHALF};
  }
  ul {
    
  }
  li {
    margin-bottom: ${variable.SINGLEplusHALF};
  }
`


export const Paragraph = styled.p`
    ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
  font-size: ${variable.REGULAR};
  margin-bottom: ${variable.SINGLE};
  & small {
    color: ${variable.BRAND_HILIGHT};
  }
  > a {
    ${props =>
      props.textColor
        ? `color: ${props.textColor};`
        : null }
    text-decoration: underline;
    &:hover,
    &:active,
    &:focus {
      color: ${variable.BRAND_HILIGHT};
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