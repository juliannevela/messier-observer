import React, { Component } from 'react';
import './ListPage.css';
import { getCatalog } from '../Common/Utils/api-utils';
import Loading from '../Common/Utils/Loading.js';

export default class ListPage extends Component {
    state = {
        messier_catalog: [],
        loading: false,
    }
    
    componentDidMount = async () => {
        this.setState({
            loading: true,
        })

        const data = await getCatalog();

        this.setState({
            messier_catalog: data,
            loading: false,
        })
    }
    render() {
        const {
            messier_catalog,
            loading,
        } = this.state

        return (
            <main className='messierCatalog'>
                {loading && <Loading />}
                <aside className='colDescriptions subGrid'>
                    <p>descriptions</p>
                    <p>descriptions</p>
                    <p>descriptions</p>
                </aside>
                <aside className='objectClass subGrid'>
                    <p>types</p>
                    <p>types</p>
                    <p>types</p>
                </aside>
                
                <ul className='list'>
                    {messier_catalog.map(item => 
                        <li className='messierObject'>
                            <p>{item.messier_id} ({item.ngc_ic_num})</p>
                            <img alt={item.type} src={item.image} />
                            <p>Common Name: {item.common_name}</p>
                            <p>Object Type: {item.type}</p>
                            <p>Distance from Earth (kly): {item.distance_from_earth_kly}</p>
                            <p>Constellation: {item.constellation}</p>
                            <p>Apparent Magnitude: {item.apparent_mag}</p>
                            <p>RA: {item.right_asc}</p>
                            <p>dec: {item.declination}</p>
                            <p>{item.observation_completed}</p>
                        </li>)}
                </ul>
            </main>
        )
    }
}
