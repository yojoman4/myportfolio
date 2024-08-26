import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Yohannes Tarekegn</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.navItem}>Home</a></li>
          <li><a href="#about" style={styles.navItem}>About</a></li>
          <li><a href="#projects" style={styles.navItem}>Projects</a></li>
          <li><a href="#contact" style={styles.navItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    fontSize: '1.5em',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default Header;
