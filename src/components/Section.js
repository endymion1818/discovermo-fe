import Styled from 'styled-components'
import {
    BRAND_SECONDARY
} from './variables'

export default Container = Styled.section`
    background-color: ${props => props.bgColor ? props.bgColor : BRAND_SECONDARY };
`

