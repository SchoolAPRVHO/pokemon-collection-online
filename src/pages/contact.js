import * as React from 'react'
import Layout from '../components/layout'
import "../components/styles.css"

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [question, setQuestion] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();

    // Send the form data to the server
    // and handle the response here...
  };

  return (
    <Layout pageTitle="Contact">
    <form onSubmit={handleSubmit} className="form">
      <label className='formLabel'>
        Name:
      </label><br />
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          className="formInput"
        />
      <br />
      <label className='formLabel'>
        Email:
      </label><br />
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          className="formInput"
        />
      <br />
      <label className='formLabel'>
        Subject:
      </label><br />
        <input
          type="text"
          value={subject}
          onChange={event => setSubject(event.target.value)}
          className="formInput"
        />
      <br />
      <label className='formLabel'>
        Question:
      </label><br />
        <textarea
          rows="3"
          value={question}
          onChange={event => setQuestion(event.target.value)}
          className="formInput"
        />
      <br />
      <button type="submit" className="formButton">Submit</button>
    </form>
    </Layout>
  );
};

export default Contact;