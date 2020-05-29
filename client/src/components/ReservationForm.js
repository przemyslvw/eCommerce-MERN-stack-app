import React, { useState } from 'react';
import { addBookTable } from '../actions/booktables'
import { connect } from 'react-redux';

const ReservationForm = ( { addBookTable } ) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNum: '',
        people: 1,
        date: '',
    });

    const { name, email, phoneNum, people, date } = formData;

    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const sendData = () => {
        addBookTable(name, email, phoneNum, people, date);
    }
    return(  
    <section className="reservation-area section_gap_top">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 offset-lg-6">
                    <div className="contact-form-section">
                        <h1>Reservation Form</h1>
                        <div>
                            <div className="form-group col-md-12">
                                <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name"
                                onChange={(e) => onChange(e)}
                                value={ name }
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                onChange={(e) => onChange(e)}
                                value={ email }
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <input
                                type="tel"
                                className="form-control"
                                id="phoneNum"
                                name="phoneNum"
                                placeholder="Phone Number"
                                onChange={(e) => onChange(e)}
                                value={ phoneNum }
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <div className="form-select">
                                <select
                                    onChange={(e) => onChange(e)}
                                    name="people"
                                    value={ people }
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <input
                                type="date"
                                className="form-control"
                                id="date"
                                name="date"
                                placeholder="Select Date & Time"
                                onChange={(e) => onChange(e)}
                                value={ date }
                                />
                            </div>

                            <div className="col-lg-12 text-center">
                                <button 
                                    className="primary-btn text-uppercase"
                                    onClick={() => sendData()}
                                >
                                Make Reservation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
   }

export default connect(null, { addBookTable })(ReservationForm)



