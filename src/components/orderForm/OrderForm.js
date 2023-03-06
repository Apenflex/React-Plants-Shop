import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';

import ModalIcon from '../../resources/img/icons/modal_icon.svg'
import './orderForm.scss';

Modal.setAppElement('#root');

const OrderForm = ({ onSubmit }) => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(false)
        onSubmit && onSubmit();
    }

    return (
        <div className="contact-form order-form">
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    phone: Yup.string().required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                    message: Yup.string()
                })}
                onSubmit={(values, actions) => {
                    // Відправка форми на сервер або інші дії
                    console.log(values);
                    // Показ модального вікна
                    setShowModal(true);
                    // Скидання значень полів форми
                    actions.resetForm();
                }}>
                <Form>
                    <div className="contact-form-group">
                        <Field
                            className='contact-form-group-name'
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your full name" />
                        <FormikErrorMessage name="name" />
                    </div>
                    <div className="contact-form-group">
                        <Field
                            className='contact-form-group-phone'
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Your phone number" />
                        <FormikErrorMessage name="phone" />
                    </div>
                    <div className="contact-form-group">
                        <Field
                            className='contact-form-group-email'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your e-mail" />
                        <FormikErrorMessage name="email" />
                    </div>
                    <div className="contact-form-group">
                        <Field
                            className='contact-form-group-message'
                            type="text"
                            id="message"
                            name="message"
                            placeholder="Your message" />
                        <FormikErrorMessage name="message" />
                    </div>
                    <button
                        className='contact-form-btn'
                        type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
            <Modal isOpen={showModal}>
                <div className='ReactModal__Content-Block'>
                    <div className="ReactModal__Content-Block-img">
                        <img src={ModalIcon} alt="" />
                    </div>
                    <span className='ReactModal__Content-Block-title'>Thank you!</span>
                    <span className='ReactModal__Content-Block-title'>We will contact you soon!</span>
                    <button
                        className='ReactModal__Content-Block-btn'
                        onClick={handleSubmit}>
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default OrderForm;