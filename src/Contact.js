import React from 'react';

function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <h2>Contact Me</h2>
      <div style={styles.container}>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={styles.social}>
          <h3>Connect with me:</h3>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>GitHub</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>Twitter</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  contact: {
    padding: '50px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: '20px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#61dafb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  social: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialLink: {
    margin: '10px 0',
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default Contact
