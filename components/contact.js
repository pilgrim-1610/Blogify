//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './abt.module.css'
import React from 'react';
import emailjs from 'emailjs-com';
const contact = () => {

   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_iqna25d', 'template_61zl1ru', e.target, 'user_MJzltxubVof7SflLNMvla')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className={styles.contact}><h2>CONTACT ME</h2>
    <div className="container">
    <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </div>
        </form>
    </div>
</div>
       );
}
  export default contact