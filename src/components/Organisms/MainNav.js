import React from 'react'

import * as atom from '../Atoms'
import * as variable from '../variables'

export const MainNav = props => (
    <ul>
        {props.links.map((item, index) => (
            <li key={index}>{item.title}</li>
        ))}
    </ul>
)