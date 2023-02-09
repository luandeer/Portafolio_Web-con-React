import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s40jq6j', 'template_w66kzeb', form.current, 'TwvweZjeugZhu8_bD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Dale un toque</h5>
      <h2>Contáctame</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <AiOutlineMail className='contact-option.icon'/>
            <h4>Email</h4>
            <h5>alexander_pere@hotmail.com</h5>
            <a href="mailto:alexander_pere@hotmail.com">Escríbeme</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact-option.icon'/>
            <h4>Messenger</h4>
            <h5>Alexander Reginaldo</h5>
            <a href="https://m.me/telmoalexander.perezreginaldo" target="_blank" rel="noreferrer">Escríbeme</a>
          </article>
          <article className="contact-option">
            <ImWhatsapp className='contact-option.icon'/>
            <h4>WhatsaApp</h4>
            <h5>+51967502750</h5>
            <a href="https://api.whatsapp.com/send?phone=51967502750" target="_blank" rel="noreferrer">Escríbeme</a>
          </article>
        </div>
        {/* end of contact */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Tu nombre completo' required />
            <input type="type" name='email' placeholder='tu email' required />
            <textarea name="message"  rows="10" placeholder='tu mensaje' required></textarea>
            <button type='submit' className='btn btn-primary'> Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact