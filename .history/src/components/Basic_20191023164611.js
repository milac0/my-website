import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import email from 'emailjs-com'

const Basic = () => {

    return (
        <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: ''
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('First Name is required'),
                    message: Yup.string()
                        .required('Message is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required')
                })}
                onSubmit={({name, message, email}) => {
                    
                    console.log(name, message, email)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <Field name="message" type="text" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        </div>
                    </Form>
                )}
            />
    )
}
export default Basic;