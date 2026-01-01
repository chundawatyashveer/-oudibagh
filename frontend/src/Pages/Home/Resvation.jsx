import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import image10 from '../../assets/images/background/image-10.JPG';

const Resvation = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const initialFormState = {
    name: '',
    phoneNumber: '',
    email: '',
    numberOfPersons: '2',
    reservationTime: '',
    experience: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [toast, setToast] = useState({
    visible: false,
    type: 'success',
    message: '',
  });

  useEffect(() => {
    if (!toast.visible) return;
    const timeout = setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
    return () => clearTimeout(timeout);
  }, [toast.visible]);

  const formatDateForApi = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFieldErrors({});

    if (!selectedDate) {
      setFieldErrors((prev) => ({
        ...prev,
        reservationDate: 'Please select a reservation date',
      }));
      setToast({
        visible: true,
        type: 'error',
        message: 'Please pick a reservation date.',
      });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      email: formData.email.trim(),
      numberOfPersons: Number(formData.numberOfPersons),
      reservationDate: formatDateForApi(selectedDate),
      reservationTime: formData.reservationTime,
      experience: formData.experience,
      message: formData.message.trim(),
    };

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/booktable`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setFieldErrors(data?.errors || {});
        throw new Error(data?.message || 'Failed to submit reservation');
      }

      setFormData(initialFormState);
      setSelectedDate(null);
      setToast({
        visible: true,
        type: 'success',
        message: 'Your request was submitted successfully!',
      });
    } catch (error) {
      setToast({
        visible: true,
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .datepicker-wrapper {
          width: 100%;
        }
        .datepicker-wrapper .react-datepicker__input-container {
          width: 100%;
        }
        .datepicker-wrapper .react-datepicker__input-container input {
          width: 100%;
          border: none;
          background: transparent;
          padding: 0;
          font-size: inherit;
          color: inherit;
          outline: none;
        }
        .react-datepicker-popper {
          z-index: 9999 !important;
        }
        .react-datepicker {
          font-family: inherit;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .react-datepicker__header {
          background-color: #8B4513;
          border-bottom: none;
          border-radius: 4px 4px 0 0;
        }
        .react-datepicker__current-month,
        .react-datepicker__day-name {
          color: #fff;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background-color: #8B4513;
        }
        .react-datepicker__day:hover {
          background-color: #A0522D;
        }
        .react-datepicker__navigation-icon::before {
          border-color: #fff;
        }
        .reservation-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          min-width: 260px;
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.85);
          color: #fff;
          border-radius: 6px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          font-weight: 600;
          text-transform: none;
        }
        .reservation-toast.success {
          background: #2e7d32;
        }
        .reservation-toast.error {
          background: #c62828;
        }
        .field-error {
          margin-top: 6px;
          display: block;
          color: #c62828;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .reservation-form .field-inner input:disabled,
        .reservation-form .field-inner textarea:disabled,
        .reservation-form .field-inner select:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
      <section className="reserve-section style-two section-kt">
      {toast.visible && (
        <div className={`reservation-toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${image10})` }}
      />
      <div className="auto-container">
        <div className="outer-box">
          <div className="row clearfix">
            <div className="reserv-col col-lg-8 col-md-12 col-sm-12 mx-auto">
              <div className="inner">
                <div className="title-box centered">
                  <div className="subtitle">
                    <span>Online reservation</span>
                  </div>
                  <h2>Book A Table</h2>
                  <div className="request-info">
                    Booking request{" "}
                    <Link to="#">+91 9876543210</Link> or fill out the reservation form
                  </div>
                </div>

                <div className="default-form reservation-form">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row clearfix">
                      {/* Name */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                          />
                          {fieldErrors.name && (
                            <span className="field-error">{fieldErrors.name}</span>
                          )}
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                          />
                          {fieldErrors.phoneNumber && (
                            <span className="field-error">{fieldErrors.phoneNumber}</span>
                          )}
                        </div>
                      </div>
                      {/* email */}
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                              placeholder="Your Email"
                            required
                          />
                          {fieldErrors.email && (
                            <span className="field-error">{fieldErrors.email}</span>
                          )}
                        </div>
                      </div>
                      {/* People */}
                      <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-user" />
                          <select
                            className="l-icon"
                            name="numberOfPersons"
                            value={formData.numberOfPersons}
                            onChange={handleChange}
                          >
                            {Array.from({ length: 20 }, (_, i) => i + 1).map((count) => (
                              <option key={count} value={count}>
                                {count} {count === 1 ? 'Person' : 'Persons'}
                              </option>
                            ))}
                          </select>
                          {fieldErrors.numberOfPersons && (
                            <span className="field-error">{fieldErrors.numberOfPersons}</span>
                          )}
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>
                      
                      {/* Date */}
                      <div className="form-group col-lg-4 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-calendar" />
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="DD-MM-YYYY"
                            className="l-icon datepicker"
                            required
                            minDate={new Date()}
                            showPopperArrow={false}
                            wrapperClassName="datepicker-wrapper"
                            popperClassName="react-datepicker-popper"
                            calendarClassName="react-datepicker-calendar"
                          />
                          {fieldErrors.reservationDate && (
                            <span className="field-error">{fieldErrors.reservationDate}</span>
                          )}
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>

                      {/* Time */}
                      <div className="form-group col-lg-4 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-clock" />
                          <select
                            className="l-icon"
                            name="reservationTime"
                            value={formData.reservationTime}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled hidden>
                              Select Time
                            </option>
                            {[
                              "08 : 00 am", "09 : 00 am", "10 : 00 am",
                              "11 : 00 am", "12 : 00 pm", "01 : 00 pm",
                              "02 : 00 pm", "03 : 00 pm", "04 : 00 pm",
                              "05 : 00 pm", "06 : 00 pm", "07 : 00 pm",
                              "08 : 00 pm", "09 : 00 pm", "10 : 00 pm"
                            ].map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                          {fieldErrors.reservationTime && (
                            <span className="field-error">{fieldErrors.reservationTime}</span>
                          )}
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <span className="alt-icon far fa-star" />
                          <select
                            className="l-icon"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                          >
                            <option value="" disabled hidden>
                              Select Experience
                            </option>
                            <option value="safari">Safari</option>
                            <option value="candle-light-dinner">Candle Light Dinner</option>
                            <option value="both">Both Safari & Candle Light Dinner</option>
                          </select>
                          {fieldErrors.experience && (
                            <span className="field-error">{fieldErrors.experience}</span>
                          )}
                          <span className="arrow-icon far fa-angle-down" />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <textarea
                            name="message"
                            placeholder="Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {fieldErrors.message && (
                            <span className="field-error">{fieldErrors.message}</span>
                          )}
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <button
                            type="submit"
                            className="theme-btn btn-style-one clearfix"
                            disabled={isSubmitting}
                          >
                            <span className="btn-wrap">
                              <span className="text-one">{isSubmitting ? 'submitting...' : 'book a table'}</span>
                              <span className="text-two">{isSubmitting ? 'submitting...' : 'book a table'}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Resvation;
