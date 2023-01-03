import React from 'react'
import { Formik } from 'formik';
import { AiOutlineSend } from 'react-icons/ai'

import './ContactForm.css'

const ContactForm = () => {

    return (
        <Formik
            initialValues={{ email: '', project: '', name: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.project) {
                    errors.project = 'Required';
                }
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.message) {
                    errors.message = 'Required';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="name" className="contact__label">Name</label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                type="text"
                                className="contact__input" id='name' />
                            <p className="error">
                                {errors.name && touched.name && errors.name}
                            </p>
                        </div>
                        <div className="contact__content">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type="email"
                                className="contact__input" />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="project" className="contact__label">Project</label>
                        <input
                            id="project"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.project}
                            type="text"
                            className="contact__input" />
                        <p className="error">
                            {errors.project && touched.project && errors.project}
                        </p>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="message" className="contact__label">Message</label>
                        <textarea
                            id="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            name="message" cols="0" rows="7" className="contact__input"></textarea>
                        <p className="error">
                            {errors.message && touched.message && errors.message}
                        </p>
                    </div>
                    <div className='container-button--contact'>
                        <button type="submit" className='button button--flex button--contact' disabled={isSubmitting}>
                            Send Message
                            <AiOutlineSend className="uil button__icon" />
                        </button>
                    </div>
                </form>
            )}
        </Formik>)
}

export default ContactForm