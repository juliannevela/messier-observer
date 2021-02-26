import React, { Component } from 'react';
import {legend} from '../Common/Utils/legendUtils.js';

export default class LegendDesc extends Component {
    render() {
        return (
            <aside className='colDescriptions'>
                <h1 className='title'>Legend</h1>
                {legend.map(item => <p>{item.description}</p>)}
            </aside>
        )
    }
}
