import React, { Component } from 'react';
import './ListPage.css';
import { 
    getCatalog, 
} from '../Common/Utils/api-utils';
import Loading from '../Common/Utils/Loading.js';
import ListItem from './ListItem.js';
import LegendDesc from './LegendDesc.js';

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
                <LegendDesc />
                
                <content className='list'>
                    {loading ? <Loading /> : messier_catalog.map(item => 
                        <ListItem 
                            key={item.messier_id}
			                messier_id={item.messier_id}
			                ngc_ic_num={item.ngc_ic_num}
                            common_name={item.common_name !== '-' ? item.common_name : console.log('Common Name Unavailable')}
			                image={item.image}
			                type={item.type}
			                distance_from_earth_kly={item.distance_from_earth_kly}
			                constellation={item.constellation}
			                apparent_mag={item.apparent_mag}
			                right_asc={item.right_asc}
			                declination={item.declination}
			                observation_completed={item.observation_completed}
                        />)}
                </content>
            </main>
        )
    }
}
