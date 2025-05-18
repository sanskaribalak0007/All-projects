import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c334ec35-8361-4699-97f3-19aefca80c23");

const object= Object.fromEntries(formData);
const json=JSON.stringify(object);




    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

   if(data.success){
    alert(data.message);
   }
  };



  return (
    <div onSubmit={onSubmit} id='contact' className='contact'>
       <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
       </div>
       <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>If you have a vision, a question, or a challenge, I’d love to hear from you. Let’s turn ideas into reality.</p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>sanskaribalak0007@gmail.com</p>
                </div>
                <div className="contact-detail">
                <img src={call_icon} alt="" /><p>6287613096</p>
                </div>
                <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Gopalganj,Bihar India</p>
                </div>
            </div>
        </div>
        <form  className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your name' required name='name' />
            <label htmlFor="">Your email</label>
            <input type="email" placeholder='Enter Your email id' required name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
       </div>
    </div>
  )
}

export default Contact