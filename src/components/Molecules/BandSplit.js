import styled from 'styled-components'
import {Band} from '../Atoms'
import * as variable from '../variables'

export const BandSplit = styled(Band)`
    position: relative;

    &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        ${props =>
          props.backgroundColorTop
            ? `background-color: ${props.backgroundColorTop}`
            : `background-color : ${variable.BRAND_SECONDARY}`}
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
            ? `background-color: ${props.backgroundColorBottom}`
            : `background-color : ${variable.BRAND_SECONDARY}`}
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`