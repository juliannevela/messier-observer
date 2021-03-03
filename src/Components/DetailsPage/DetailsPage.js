import React, { Component } from 'react';
import './DetailsPage.css';
// import Form from '../Common/Form.js';
import {
	getMessierObject,
	getTypes,
	updateMessierObject,
	getTypeId,
	deleteMessierObject,
} from '../Common/Utils/api-utils.js';

export default class DetailsPage extends Component {
	state = {
		object_types: [],
		messier_id: '',
		ngc_ic_num: '',
		common_name: '',
		image: '',
		type_id: '',
		distance_from_earth_kly: '',
		constellation: '',
		apparent_mag: '',
		right_asc: '',
		declination: '',
		observation_completed: false,
	};

	componentDidMount = async () => {
		const object_types = await getTypes();

		const messierObject = await getMessierObject(
			this.props.match.params.messier_id
		);

		const type_id = getTypeId(messierObject, object_types);

		this.setState({
			...messierObject,
			type_id,
			object_types,
		});
	};

	handleIdChange = (e) => this.setState({ messier_id: e.target.value });
	handleNGCChange = (e) => this.setState({ ngc_ic_num: e.target.value });
	handleCNameChange = (e) => this.setState({ common_name: e.target.value });
	handleImageChange = (e) => this.setState({ image: e.target.value });
	handleDistanceChange = (e) =>
		this.setState({ distance_from_earth_kly: Number(e.target.value) });
	handleConsteChange = (e) =>
		this.setState({ constellation: e.target.value });
	handleMagChange = (e) =>
		this.setState({ apparent_mag: Number(e.target.value) });
	handleRAChange = (e) => this.setState({ right_asc: e.target.value });
	handleDecChange = (e) => this.setState({ declination: e.target.value });
	handleObserveChange = (e) =>
		this.setState({
			observation_completed: !this.state.observation_completed,
		});
	handleTypeChange = (e) => this.setState({ type_id: e.target.value });

	handleSubmit = async (e) => {
		e.preventDefault();
		const updatedObject = this.state;
		await updateMessierObject(this.state.messier_id, updatedObject);

		this.props.history.push('/messier_catalog');
	};

	handleDelete = async () => {
		await deleteMessierObject(this.state.messier_id);
		this.props.history.push('/messier_catalog');
	};
	render() {
		const {
			object_types,
			messier_id,
			ngc_ic_num,
			common_name,
			image,
			type_id,
			distance_from_earth_kly,
			constellation,
			apparent_mag,
			right_asc,
			declination,
			observation_completed,
		} = this.state;

		return (
			<main className='detailsPage'>
				<section>
					<form className='border-wrap' onSubmit={this.handleSubmit}>
						<label>Messier Number</label>
						<input
							value={messier_id}
							onChange={this.handleIdChange}
						/>
						<label>New General Catalogue ID</label>
						<input
							value={ngc_ic_num}
							onChange={this.handleNGCChange}
						/>
						<label>Image URL:</label>
						<input
							value={image}
							onChange={this.handleImageChange}
						/>
						<label>Common Name:</label>
						<input
							value={common_name}
							onChange={this.handleCNameChange}
						/>
						<label>Object Type:</label>
						<select
							value={type_id}
							onChange={this.handleTypeChange}>
							{object_types.map((type) => (
								<option
									value={type.id}
									defaultValue={type.id === type_id}>
									{type.type}
								</option>
							))}
						</select>
						<label>Distance from Earth (kly):</label>
						<input
							value={distance_from_earth_kly}
							onChange={this.handleDistanceChange}
						/>
						<label>Constellation:</label>
						<input
							value={constellation}
							onChange={this.handleConsteChange}
						/>
						<label>Apparent Magnitude:</label>
						<input
							placeholder='12.5'
							value={apparent_mag}
							type='number'
							step={0.1}
							onChange={this.handleMagChange}
						/>
						<label>RA:</label>
						<input
							value={right_asc}
							onChange={this.handleRAChange}
						/>
						<label>Declination:</label>
						<input
							value={declination}
							onChange={this.handleDecChange}
						/>
						<label>Observation Completed?</label>
						<input
							type='checkbox'
							value={observation_completed}
							onChange={this.handleObserveChange}
						/>
						<button style={{ alignSelf: 'center' }}>Change</button>
					</form>
					<button value={messier_id} onClick={this.handleDelete}>
						Delete
					</button>

					{/* <Form /> */}
				</section>
			</main>
		);
	}
}
