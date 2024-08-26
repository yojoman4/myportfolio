import React from 'react';

function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <div style={styles.text}>
          <h2>About Me</h2>
          <p>Hi, I'm Yohannes Tarekegn, a passionate MEAN stack developer. I enjoy creating efficient and scalable web applications that solve real-world problems.</p>
          <h3>Skills</h3>
          <ul style={styles.skillsList}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        <div style={styles.photo}>
          {/* Placeholder for your photo */}
          <img src="/jopic.jpg" alt="Yohannes Tarekegn" style={styles.img} />
        </div>
      </div>
    </section>
  );
}

const styles = {
  about: {
    padding: '50px 20px',
    backgroundColor: '#ffffff',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  text: {
    flex: 1,
    paddingRight: '20px',
  },
  skillsList: {
    listStyle: 'none',
    padding: 0,
  },
  photo: {
    flex: 1,
    textAlign: 'center',
  },
  img: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  },
};

export default About;
