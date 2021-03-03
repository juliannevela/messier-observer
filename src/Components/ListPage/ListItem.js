import React, { Component } from 'react';
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
			<Link className='navLink' to={`/messier_catalog/${messier_id}`}>
				<div className='messierObject border-wrap'>
					<h3 className='title'>
						{messier_id} ({ngc_ic_num})
					</h3>
					<img alt={type} src={image} />
					<div className='stats'>
						{common_name === '–' ? null : (
							<span>Common Name: {common_name}</span>
						)}
						<span>Object Type: {type}</span>
						<span>Distance: {distance_from_earth_kly}</span>
						<span>Constellation: {constellation}</span>
						<span>Apparent Magnitude: {apparent_mag}</span>
						<span>RA: {right_asc}</span>
						<span>DEC: {declination}</span>
						<span>
							{observation_completed === true
								? 'Observed'
								: 'Need to Observe'}
						</span>
					</div>
				</div>
			</Link>
		);
	}
}
