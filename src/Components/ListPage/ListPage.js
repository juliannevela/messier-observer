import React, { Component } from 'react'
import { getCatalog } from '../Common/Utils/api-utils'

export default class ListPage extends Component {
    state = {
        messier_catalog: []
    }
    
    componentDidMount = async () => {
        const data = await getCatalog();

        this.setState({messier_catalog: data})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
