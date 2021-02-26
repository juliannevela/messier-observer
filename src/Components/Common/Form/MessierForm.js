// import React, { Component } from 'react'
// import {handleIdChange, handleNGCChange, handleCNameChange, handleImageChange, handleDistanceChange, handleConsteChange, handleMagChange, handleRAChange, handleDecChange, handleObserveChange, handleTypeChange} from '../Utils/ChangeHandlers.js';


//        <MessierForm 
//                     object_types={object_types}
// 			        messier_id={messier_id}
//                     ngc_ic_num={ngc_ic_num}
//                     common_name={common_name}
//                     image={image}
//                     type_id={type_id}
//                     distance_from_earth_kly={distance_from_earth_kly}
//                     constellation={constellation}
//                     apparent_mag={apparent_mag}
//                     right_asc={right_asc}
//                     declination={declination}
//                     observation_completed={observation_completed}
//                     handleSubmit={this.handleSubmit}
//                 />
// export default class MessierForm extends Component {
//     render() {
//     const {
//             object_types,
// 			messier_id,
// 			ngc_ic_num,
// 			common_name,
// 			image,
// 			type_id,
// 			distance_from_earth_kly,
// 			constellation,
// 			apparent_mag,
// 			right_asc,
// 			declination,
// 			observation_completed,
//             handleSubmit,
// 		} = this.props;
    
//     return (
//         <form onSubmit={handleSubmit}>
// 					<label>
// 						Messier Number
// 						<input
// 							value={messier_id}
// 							onChange={handleIdChange}
// 						/>
// 					</label>
// 					<label>
// 						New General Catalogue ID
// 						<input
// 							value={ngc_ic_num}
// 							onChange={handleNGCChange}
// 						/>
// 					</label>
// 					<label>
// 						Image URL:
// 						<input
// 							value={image}
// 							onChange={handleImageChange}
// 						/>
// 					</label>
// 					<label>
// 						Common Name(if applicable):
// 						<input
// 							value={common_name}
// 							onChange={handleCNameChange}
// 						/>
// 					</label>
// 					<label>
// 						Object Type:
// 						<select
// 							value={type_id}
// 							onChange={handleTypeChange}>
//                             {object_types.map(type => 
//                                 <option value={type.id} defaultValue={type_id === type.id}>     {type.type}
//                                 </option>
//                                 )
//                             }
// 						</select>
// 					</label>
// 					<label>
// 						Distance from Earth (kly):
// 						<input
// 							value={distance_from_earth_kly}
// 							onChange={handleDistanceChange}
// 						/>
// 					</label>
// 					<label>
// 						Constellation:
// 						<input
// 							value={constellation}
// 							onChange={handleConsteChange}
// 						/>
// 					</label>
// 					<label>
// 						Apparent Magnitude:
// 						<input
// 							value={apparent_mag}
//                             type='number'
//                             step={0.1}
// 							onChange={handleMagChange}
// 						/>
// 					</label>
// 					<label>
// 						RA:
// 						<input
// 							value={right_asc}
// 							onChange={handleRAChange}
// 						/>
// 					</label>
// 					<label>
// 						Declination:
// 						<input
// 							value={declination}
// 							onChange={handleDecChange}
// 						/>
// 					</label>
// 					<label>
// 						Observation Completed?
// 						<input
// 							type='checkbox'
// 							value={observation_completed}
// 							onChange={handleObserveChange}
// 						/>
// 					</label>
// 					<button value='change'>Change</button>
//                     <button value='delete'>Delete</button>
// 				</form>
//     )
// }}
