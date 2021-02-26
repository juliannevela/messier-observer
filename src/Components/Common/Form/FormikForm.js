import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {updateMessierObject} from '../Utils/api-utils.js';
 
 export default function updateForm() {
     return (
         <Formik 
            initialValues={{
               messier_id: '', 
               ngc_ic_num: '',
               common_name: '',
               image: '',
               distance_from_earth_kly: '',
               constellation: '',
               apparent_mag: '',
               right_asc: '',
               declination: '',
               toggle: false,
            }}
            validate={values => {
                const errors = {};
                if(!values.messier_id) {
                    errors.messier_id = 'Required';
                } else if(values.messier_id.length > 5) {
                    errors.messier_id = 'Must be 5 characters or less';
                }

                if(!values.ngc_ic_num) {
                    errors.ngc_ic_num = 'Required';
                } else if(values.ngc_ic_num.length > 10) {
                    errors.ngc_ic_num = 'Must be 10 characters or less';
                }
                
                if(!values.image) {
                    errors.image = 'Required';
                } else if(values.image.length > 512) {
                    errors.image = 'Must be a URL';
                }
                
                if(!values.distance_from_earth_kly) {
                    errors.distance_from_earth_kly = 'Required';
                } else if(values.distance_from_earth_kly.length > 10) {
                    errors.distance_from_earth_kly = 'Must be 10 characters or less';
                }
                
                if(!values.constellation) {
                    errors.constellation = 'Required';
                } else if(values.constellation.length > 512) {
                    errors.constellation = 'Must be 512 characters or less';
                }
                
                if(!values.apparent_mag) {
                    errors.apparent_mag = 'Required';
                } else if(values.apparent_mag.length > 10) {
                    errors.apparent_mag = 'Must be 10 characters or less';
                }
                
                if(!values.right_asc) {
                    errors.right_asc = 'Required';
                } else if(values.right_asc.length > 10) {
                    errors.right_asc = 'Must be 10 characters or less';
                }
                
                if(!values.declination) {
                    errors.declination = 'Required';
                } else if(values.declination.length > 10) {
                    errors.declination = 'Must be 10 characters or less';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
		        updateMessierObject(this.props.match.messier_id, this.state);

		        this.props.history.push('/messier_catalog');
                setSubmitting(false);
            }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor='messier_id'>
                            Messier Number
                            <Field name='messier_id' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='messier_id' component='div'/>
                        <br />
                        <label htmlFor='ngc_ic_num'>
                            New General Catalogue ID
                            <Field name='ngc_ic_num' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='ngc_ic_num' component='div' />
                        <br />
                        <label htmlFor='common_name'>
                            Common Name (if applicable)
                            <Field name='common_name' type='text'/> 
                        </label>
                        {/* <br />
                        <ErrorMessage name='messier_id' component='div'/>
                        <br /> */}
                        <label htmlFor='image'>
                            Image URL
                            <Field name='image' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='image' component='div'/>
                        <br />
                        <label htmlFor='distance_from_earth_kly'>
                            Distance from Earth (kly)
                            <Field name='distance_from_earth_kly' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='distance_from_earth_kly' component='div'/>
                        <br />
                        <label htmlFor='constellation'>
                            Constellation
                            <Field name='constellation' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='constellation' component='div'/>
                        <br />
                        <label htmlFor='apparent_mag'>
                            Apparent Magnitude
                            <Field name='apparent_mag' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='apparent_mag' component='div'/>
                        <br />
                        <label htmlFor='right_asc'>
                            RA
                            <Field name='right_asc' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='right_asc' component='div'/>
                        <br />
                        <label htmlFor='declination'>
                            Dec
                            <Field name='declination' type='text'/> 
                        </label>
                        <br />
                        <ErrorMessage name='declination' component='div'/>
                        <br />
                        <label htmlFor='observation_completed'>
                            Observation Completed?
                            <Field name='toggle' type='checkbox'/> 
                        </label>
                        <br />
                        <button type='submit' disabled={isSubmitting}>Update</button>
                    </Form>
                )}
            </Formik>
        );
}
 
 