import React from 'react';

const Form = () => {
    return (
        <div>
            <form>
                    <input placeholder="name"/>
                    <input placeholder="email"/>
                    {/* <input placeholder="company name"/> */}
                    <textarea 
                    rows={4}
                    columns={50}
                    placeholder="message"/>
                    <button>Submit</button>
                </form>
        </div>
    );
};

export default Form;