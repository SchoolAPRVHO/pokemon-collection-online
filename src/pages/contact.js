import * as React from 'react'
import Layout from '../components/layout'
import "../components/styles.css"

const Contact = () => {

  return (
    <Layout pageTitle="Contact">
    <form className="form" name='contactForm' method='post' data-netlify="true">
      <label className='formLabel' htmlFor="fullName">
        Name:
      </label><br />
        <input
          type="text" 
          name="name"
          className="formInput"
          id="fullName"
          required={true}
          placeholder="Fullname"
        />
      <br />
      <label className='formLabel' htmlFor="email">
        Email:
      </label><br />
        <input
          type="email" 
          name="email"
          className="formInput"
          id="email"
          required={true}
          placeholder="Email"
        />
      <br />
      <label className='formLabel' htmlFor="subject">
        Subject:
      </label><br />
        <input
          type="text" 
          name="subject"
          className="formInput"
          id="subject"
          required={true}
          placeholder="Subject"
        />
      <br />
      <label className='formLabel' htmlFor="question">
        Question:
      </label><br />
        <textarea
          rows="3"
          className="formInput"
          id="question"
          required={true}
          placeholder="Question"
          name='question'
        />
      <br />
      <button type="submit" className="formButton">Submit</button>
    </form>
    </Layout>
  );
};

export default Contact;
