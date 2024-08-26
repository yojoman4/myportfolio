import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is a description of your first project.',
      imageUrl: 'https://via.placeholder.com/300',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'This is a description of your second project.',
      imageUrl: 'https://via.placeholder.com/300',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Three',
      description: 'This is a description of your third project.',
      imageUrl: 'https://via.placeholder.com/300',
      link: 'https://github.com/yourusername/project-three',
    },
  ];

  return (
    <section id="projects" style={styles.projects}>
      <h2>My Projects</h2>
      <div style={styles.projectGrid}>
        {projectList.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={project.imageUrl} alt={project.title} style={styles.projectImage} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projects: {
    padding: '50px 20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  projectGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  projectCard: {
    width: '300px',
    margin: '20px',
    padding: '20px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  projectImage: {
    width: '100%',
    borderRadius: '8px',
  },
  projectLink: {
    marginTop: '10px',
    display: 'inline-block',
    color: '#61dafb',
    textDecoration: 'none',
  },
};

export default Projects;
