import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import email from 'emailjs-com'

const Basic = () => {

    return (
        <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    console.log(fields)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Message</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
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