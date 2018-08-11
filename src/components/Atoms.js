import Styled from 'styled-components'
import * as variable from './variables'

const Band = styled.section`
    padding-top: 2.625rem;
    padding-bottom: 2.875rem;
    ${props => props.backgroundimg ? `background-image: url(${props.backgroundimg});
    background-size:cover;
    background-position: right top;` : null}

    @media (min-width: ${variable.BREAKPOINT_MD}) {
      padding-top: 6.063rem;
    padding-bottom: 4.375rem;
    }
`

export const Container = styled.div`
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  @media all and (min-width: ${variable.BREAKPOINT_MD}) {
    max-width: 64em;
    margin: 0;
    margin: 0 auto;
  }
`

export default Paragraph = Styled.p`
    font-size: 1.2rem;
    color: ${props => props.textColor ? props.textColor : BRAND_PRIMARY };
`
