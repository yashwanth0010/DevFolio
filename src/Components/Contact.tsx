import { useState, type FormEvent, type TransitionEvent } from 'react';
import emailjs from '@emailjs/browser';
import EmailNotification from './EmailNotification';
import { LoadingSpinner } from './LoadingSpinner';

const Contact = () => {
  const [notification, setNotification] = useState({ show: false, success: false, fading: false });
  const [isLoading, setIsLoading] = useState(false);
  const VISIBLE_MS = 3000; // time before starting fade

  const handleNotificationTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    // hide when opacity transition finishes and we're in fading state
    if (e.propertyName === 'opacity' && notification.fading) {
      setNotification({ show: false, success: false, fading: false });
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_Email_Service_Id;
    const templateId = import.meta.env.VITE_Email_Template_Id;
    const publicKey = import.meta.env.VITE_Email_Public_Key;
    const form = e.currentTarget;

    setIsLoading(true);

    if (!serviceId || !templateId || !publicKey || !form) {
      setIsLoading(false);
      setNotification({ show: true, success: false, fading: false });
      setTimeout(() => setNotification((s) => ({ ...s, fading: true })), VISIBLE_MS);
      return;
    }

    // Initialize EmailJS with the public key
    emailjs.init(publicKey);
    emailjs.sendForm(serviceId, templateId, form).then(
      () => {
        setNotification({ show: true, success: true, fading: false });
        setIsLoading(false);
        setTimeout(() => setNotification((s) => ({ ...s, fading: true })), VISIBLE_MS);
      },
      (error) => {
        console.log(error);
        setNotification({ show: true, success: false, fading: false });
        setIsLoading(false);
        setTimeout(() => setNotification((s) => ({ ...s, fading: true })), VISIBLE_MS);
      },
    );
  };

  return (
    <>
      {notification.show && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div
              className={`pointer-events-auto transition-opacity duration-500 ease-out ${notification.fading ? 'opacity-0' : 'opacity-100'}`}
              onTransitionEnd={handleNotificationTransitionEnd}
            >
              <EmailNotification success={notification.success} />
            </div>
          </div>
        </>
      )}

      {isLoading && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="pointer-events-auto rounded-2xl bg-white/90 p-6 shadow-xl dark:bg-slate-900/90">
              <LoadingSpinner />
            </div>
          </div>
        </>
      )}
      <section
        id="contact"
        className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div
                  id="contact"
                  className="box-shadow-full bg-black"
                  style={{ borderRadius: '5rem' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Message Me!</h5>
                      </div>
                      <div>
                        <form
                          onSubmit={sendEmail}
                          method="post"
                          role="form"
                          className="php-email-form">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  id="message"
                                  className="form-control"
                                  name="message"
                                  rows={8}
                                  placeholder="Message"
                                  required></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              {/*<div className="loading">Loading</div>
                            <div className="error-message"></div>
    <div className="sent-message">Your message has been sent. Thank you!</div>*/}
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                disabled={isLoading}
                                className="button button-a button-big button-rouded disabled:cursor-not-allowed disabled:opacity-70">
                                {isLoading ? <LoadingSpinner /> : 'Send Message'}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        {/*   
                   <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                        expedita aperiam aliquid at.
                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                        mollitia inventore?
                    </p>   
                    */}
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-phone"></span>(+91)
                            7799995058
                          </li>
                          <li>
                            <span className="bi bi-envelope"></span>{' '}
                            <a href="mailto:yashwanthkumar.chamakura@gmail.com">
                              yashwanthkumar.chamakura@gmail.com{' '}
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/yashwanth0010/"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="bi bi-linkedin"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/yashwanth0010"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="bi bi-github"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/yashwanth0210/"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="bi bi-instagram"></i>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/yash_1002"
                              target="_blank"
                              rel="noopener noreferrer">
                              <span className="ico-circle">
                                <i className="bi bi-twitter"></i>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
