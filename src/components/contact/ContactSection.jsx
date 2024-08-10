import React, { useState } from 'react'

function ContactSection() {
    const [showMap, setShopMap] = useState(false);
    const openMap = () => setShopMap(true);
    const closeMap = () => setShopMap(false)
    return (
        <>
            <div className={`contact-map-offcanvas ${showMap ? 'active ' : ''}`}>
                <button className="map-close-button" onClick={closeMap}>Back to Site</button>
                <div className="map">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5634809569137!2d10.82178227627434!3d35.761532525557826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212c7becd72b3%3A0x66d74cc350812db4!2sR%C3%A9sidence%20Dagdoug!5e0!3m2!1sen!2stn!4v1710201480243!5m2!1sen!2stn" ></iframe>
                </div>
            </div>
            <section className="contact-section" id='contact'>
                <div className="container" data-aos="fade-up">
                    <h1>CONTACT OR FIND US ON <button onClick={openMap}>THE MAP</button></h1>

                    <form action="#" className="contact-form">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="form-row">
                                    <label htmlFor="name-input">Name</label>
                                    <input type="text" className="form-control" id="name-input" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="name-email">Email</label>
                                    <input type="email" className="form-control" id="name-email" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="name-subject">Subject</label>
                                    <input type="text" className="form-control" id="name-subject" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="form-row message">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message"></textarea>
                                    <button type="submit" className="send-button"><span>Send</span><i className="fa-solid fa-envelope"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="sosial-icons">
                        <button><i className="fa-brands fa-facebook-f"></i></button>
                        <button><i className="fa-brands fa-twitter"></i></button>
                        <button><i className="fa-brands fa-instagram"></i></button>
                        <button><i className="fa-brands fa-youtube"></i></button>
                        <button><i className="fa-brands fa-linkedin-in"></i></button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection
