import React from 'react';
import * as yup from 'yup';
import email from 'emailjs-com'

const Form = () => {

    const userSchema = yup.object().shape({
        name: yup.string()
            .required('Name is required'),
        message: yup.string()
            .required('Message is required'),
        email: yup.string()
            .email('Email is invalid')
            .required('Email is required')
    })

    return (
        <div>
            <form>
                    <input placeholder="name" name="name" type="text"/>
                    <input placeholder="email" name="email" type="email"/>
                    <textarea 
                    rows={5}
                    cols={50}
                    placeholder="feedbaMessage"
                    type="text"
                    name="email"
                    />
                    <button className="button-submit">Submit</button>
                </form>
        </div>
    );
};

export default Form;