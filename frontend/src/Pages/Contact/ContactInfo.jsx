import React, { useEffect, useState } from 'react';
import restaurant from '../../assets/images/resource/night.jpg';

const ContactInfo = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setFieldErrors(data?.errors || {});
        throw new Error(data?.message || 'Failed to submit message');
      }

      setFormData(initialFormState);
      setToast({
        visible: true,
        type: 'success',
        message: 'Your message was sent successfully!',
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
    <section className="contact-page section-kt">
      <style>{`
        .contact-toast {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          min-width: 260px;
          padding: 16px 20px;
          border-radius: 6px;
          color: #fff;
          font-weight: 600;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .contact-toast.success {
          background: #2e7d32;
        }
        .contact-toast.error {
          background: #c62828;
        }
        .contact-form .field-error {
          margin-top: 6px;
          display: block;
          color: #c62828;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .contact-form .field-inner input:disabled,
        .contact-form .field-inner textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
      {toast.visible && (
        <div className={`contact-toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
      {/* Location form Section */}
      <div className="auto-container">
        <div className="c-page-form-box">
          <div className="row clearfix">

            {/* Image Section */}
            <div className="loc-block info-block col-lg-5 col-md-12 col-sm-12">
              <div className="contact-image">
                <img src={restaurant} alt={restaurant} />
              </div>
              <h5>Visit Us</h5>
              <div className="text">
                Oudi Bagh, Pushkar, Rajasthan, India <br /><br />
                <span className="c-info-ttl">Lunch Time</span> - 10:00 am – 3:30 pm <br />
                <span className="c-info-ttl">Dinner Time</span> - 08:00 pm – 10:30 pm <br /><br />
                <span className="more-link">
                    Booking Request: <a href="tel:+91-9352540881">+91-9352540881</a>
                </span><br />
                <span className="more-link">
                  Email: <a href="mailto:booking@gmail.com">booking@gmail.com</a>
                </span>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="col-12 col-md-1 d-flex justify-content-center middle-line-wrapper">
              <div className="middle-line-container">
                <div className="dot top-dot" />
                <div className="v-line" />
                <div className="dot bottom-dot" />
              </div>
            </div>

            {/* Form Section */}
            <div className="loc-block col-lg-6 col-md-12 col-sm-12">
              <div className="form-side">
                <div className="title-box centered">
                  <div className="subtitle">
                    <span>Write to us</span>
                  </div>
                  <h2>Message Us</h2>
                  <div className="text desc">
                    Contact us - we aim to reply within 24 hours and are happy to help!
                  </div>
                </div>

                <div className="default-form reservation-form contact-form">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="clearfix">

                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.name && (
                            <span className="field-error">{fieldErrors.name}</span>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.email && (
                            <span className="field-error">{fieldErrors.email}</span>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="field-inner">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.phone && (
                            <span className="field-error">{fieldErrors.phone}</span>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="field-inner">
                          <textarea
                            name="message"
                            placeholder="Special Request"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                          {fieldErrors.message && (
                            <span className="field-error">{fieldErrors.message}</span>
                          )}
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one clearfix"
                          disabled={isSubmitting}
                        >
                          <span className="btn-wrap">
                            <span className="text-one">{isSubmitting ? 'Sending...' : 'Send your message'}</span>
                            <span className="text-two">{isSubmitting ? 'Sending...' : 'Send your message'}</span>
                          </span>
                        </button>
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
  );
};

export default ContactInfo;

