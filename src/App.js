import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Header />
      <section id="home" style={styles.home}>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Yohannes Tarekegn, a MERN stack developer passionate about building innovative solutions.</p>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

const styles = {
  home: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
};

export default App;




