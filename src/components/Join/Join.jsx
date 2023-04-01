import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser';

function Join () {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hf9r0ln', 'template_k3rec09', form.current, 'Pd4qO445Pyzwj6ORM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return(
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr/>
                <div>
                    <span className="stroke-text">READY TO </span>
                    <span>lEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">

                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="mail" name="user_email" placeholder="Enter your email address"/>                 
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export {Join};