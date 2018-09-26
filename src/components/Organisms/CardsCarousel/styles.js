import styled from 'styled-components'
import * as variable from '../../variables'

export const Main = styled.div`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : variable.BRAND_HILIGHT};
`

export const Container = styled.div`
  box-sizing: content-box;
  max-width: 64em;
  margin: 0 auto;
  overflow: hidden;
  padding: ${variable.QUAD} 0;
  @media (min-width: ${variable.BREAK_PHONE}) {
    padding: ${variable.QUAD} 0 ${variable.QUAD} 5rem;
  }
  .slick-dots li button {
    border: ${variable.BORDER_THIN} solid ${variable.BRAND_HILIGHT};
    border-radius: ${variable.RADIUS_BUTTON};
    height: ${variable.SINGLE};
    width: ${variable.SINGLE};
    text-indent: -9999px;
  }
  .slick-dots li button:hover,
  .slick-dots li.slick-active button {
    background-color: ${variable.BRAND_HILIGHT};
  }
`

export const CardsContainer = styled.div`

  @media (min-width: ${variable.BREAK_PHONE}) {
    width: 60%;
    float: right;
  }
`

export const MainTextContainer = styled.div`
  margin: 0 ${variable.DOUBLE} ${variable.DOUBLE} ${variable.TRIPLEplusHALF};
  @media (min-width: ${variable.BREAK_PHONE}) {
    padding-right: 0;
    float: left;
    margin: 0 0 ${variable.SINGLE};
    width: 40%;
  }
`
