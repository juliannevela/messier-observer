import React, { Component } from 'react';
import './DetailsPage.css';
import Form from '../Common/Form.js';
import {
    getMessierObject,
    getTypes,
    updateMessierObject,
    getTypeId,
} from '../Common/Utils/api-utils.js';

export default class DetailsPage extends Component {
    state = {
        object_types: [],
        messier_id: '',
        ngc_ic_num: '',
        common_name: '',
        image: '',
        distance_from_earth_kly: '',
        constellation: '',
        apparent_mag: '',
        right_asc: '',
        declination: '',
        observation_completed: false,
    }

    componentDidMount = async () => {
        const object_types = await getTypes();

        const messierObject = await getMessierObject(this.props.match.params.messier_id);

        const type_id = getTypeId(messierObject, object_types);

        this.setState({
            ...messierObject,
            type_id,
            object_types,
        })
    } 
        render() {
        return (
            <main className='detailsPage'>
                <Form />
            </main>
        )
    }
}