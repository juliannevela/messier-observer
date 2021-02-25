import React from 'react';
import ReactDOM from "react-dom";
import { useFormik } from 'formik';
 
 function Form() {
     const formik = useFormik({
         initialValues: { 
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
         },
         onSubmit: values => {
             alert(JSON.stringify(values, null, 2));
         },
     });
     return (
         <form onSubmit={formik.handleSubmit}>
             <label htmlFor='messier_id'>Messier Number</label>
             <input 
                 id='messier_id'
                 name='messier_id'
                 type='text'
                 onChange={formik.handleChange}
                 value={Number(formik.values.messier_id)}
             /> 
             <label htmlFor='ngc_ic_num'>New General Catalogue ID</label>
             <input 
                 id='ngc_ic_num'
                 name='ngc_ic_num'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.ngc_ic_num}
             /> 
             <label htmlFor='common_name'>Common Name (if applicable)</label>
             <input 
                 id='common_name'
                 name='common_name'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.common_name}
             /> 
             <label htmlFor='image'>Image URL</label>
             <input 
                 id='image'
                 name='image'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.image}
             /> 
             <label htmlFor='distance_from_earth_kly'>Distance from Earth (kly)</label>
             <input 
                 id='distance_from_earth_kly'
                 name='distance_from_earth_kly'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.distance_from_earth_kly}
             /> 
             <label htmlFor='constellation'>Constellation</label>
             <input 
                 id='constellation'
                 name='constellation'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.constellation}
             /> 
             <label htmlFor='apparent_mag'>Apparent Magnitude</label>
             <input 
                 id='apparent_mag'
                 name='apparent_mag'
                 type='text'
                 onChange={formik.handleChange}
                 value={Number(formik.values.apparent_mag)}
             /> 
             <label htmlFor='right_asc'>RA</label>
             <input 
                 id='right_asc'
                 name='right_asc'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.right_asc}
             /> 
             <label htmlFor='declination'>Dec</label>
             <input 
                 id='declination'
                 name='declination'
                 type='text'
                 onChange={formik.handleChange}
                 value={formik.values.declination}
             /> 
             <label htmlFor='observation_completed'>Observation Completed?</label>
             <input 
                 id='observation_completed'
                 name='observation_completed'
                 type='checkbox'
                 onChange={formik.handleChange}
                 value={formik.values.observation_completed}
             /> 
             <button type='submit'>Update</button>
         </form>
     );
 }
 
 export default Form
 
 