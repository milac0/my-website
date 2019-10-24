import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'

import styles from './formContact.module.css'

const FormContact = () => {

    return (
        <Formik
                initialValues={{
                    name: '',
                    message: '',
                    email: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('Name is required'),
                    message: Yup.string()
                        .required('Message is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required')
                })}
                onSubmit={({name, message, email}) => {
                    console.log(process.env.REACT_APP_API_KEY)
                    emailjs.send('gmail_mile_balenovic', 'template_kfALJkSq', {name, email, message}, process.env.REACT_APP_EMAIL_API_KEY)
                    .then(response => console.log(response))
                    .catch(err => console.log(err))
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <Field name="name" placeholder="Name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="email" placeholder="Email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="message" placeholder="Message" type="text" component="textarea" rows="5" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className={styles.buttonSubmit}>Submit</button>
                        </div>
                    </Form>
                )}
            />
    )
}
export default FormContact;