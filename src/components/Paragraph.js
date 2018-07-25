import Styled from 'styled-components'
import {
    BRAND_PRIMARY
} from './variables'

export default Paragraph = Styled.p`
    font-size: 1.2rem;
    color: ${props => props.textColor ? props.textColor : BRAND_PRIMARY }
`