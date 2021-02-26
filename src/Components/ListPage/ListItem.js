import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class ListItem extends Component {
    render() {
        const {
			messier_id,
			ngc_ic_num,
			common_name,
			image,
            type,
			distance_from_earth_kly,
			constellation,
			apparent_mag,
			right_asc,
			declination,
			observation_completed,
		} = this.props;

        return (    
            <Link to={`/messier_catalog/${messier_id}`}>                 
                <div className='messierObject'>
                    <p>{messier_id} ({ngc_ic_num})</p>
                    <img alt={type} src={image} />
                    {(common_name === "–") ? console.log('Common Name Not Available') : <p>Common Name: {common_name}</p>}
                    <p>Object Type: {type}</p>
                    <p>Distance: {distance_from_earth_kly}</p>
                    <p>Constellation: {constellation}</p>
                    <p>Apparent Magnitude: {apparent_mag}</p>
                    <p>RA: {right_asc}</p>
                    <p>dec: {declination}</p>
                    <p>{(observation_completed === true) ? 'Observed' : 'Need to Observe'}</p>
                </div>
            </Link>
        )
    }
}
