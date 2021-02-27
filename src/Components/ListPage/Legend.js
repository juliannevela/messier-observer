import React, { Component } from 'react';
import {legend} from '../Common/Utils/legendUtils.js';
export default class Legend extends Component {
    renderTableData() {
        return legend.map((key, index) => {
            const {id, description} = key
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <aside className='legend border-wrap'>
                <h1 className='legTitle'>Legend</h1>
                <table className='content'>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </aside>
        )
    }
}
