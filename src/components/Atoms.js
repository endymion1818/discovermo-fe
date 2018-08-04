import Styled from 'styled-components'
import {
    BRAND_SECONDARY
} from './variables'

export default Container = Styled.div`
    background-color: ${props => props.bgColor ? props.bgColor : BRAND_SECONDARY };
    max-width: 1190px;
    margin: 0 auto;
    padding: 0 1rem;
`

export default Paragraph = Styled.p`
    font-size: 1.2rem;
    color: ${props => props.textColor ? props.textColor : BRAND_PRIMARY };
`

export default Container = Styled.section`
    background-color: ${props => props.bgColor ? props.bgColor : BRAND_SECONDARY };
`

