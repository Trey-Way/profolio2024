import React from 'react'
import './css/Contact.css'

const Contact = () => {
    return (
        <section className="contact">
            <form>
                <h2>Want to contact directly? Here you go!</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" classname="field" placeholder='Enter Your Name' required />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" classname="field" placeholder='Enter Your email' required />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name="" id="" className="field mess" placeholder='Enter Your Message' required />
                </div>
            </form>
        </section>
    )
}

export default Contact