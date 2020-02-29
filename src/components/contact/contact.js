
import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css'


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target)

    emailjs.sendForm('default_service', 'template_4XZrIpKt', e.target,'WbeUYLO8TMaKH3hBSVqbe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    
    <form className="contact-form" onSubmit={sendEmail}>
      <h3>Contact me via Email</h3>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea className='message' name="message" />
      <input className='button' type="submit" value="Send" />
    </form>
  );
}
