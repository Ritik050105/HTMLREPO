import React from 'react';
import './Profile.css';

const Profile = () => {
  const person = {
    name: 'John',
    title: 'Frontend Developer',
    bio: 'Passionate about creating beautiful and functional user interfaces with React. Experienced in building responsive web applications.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    skills: ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'],
    socialLinks: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image">
          <img src={person.imageUrl} alt={person.name} />
        </div>
        
        <div className="profile-info">
          <h1>{person.name}</h1>
          <h2>{person.title}</h2>
          <p>{person.bio}</p>
          
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              {person.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className="social-links">
            <h3>Connect</h3>
            <div className="links">
              <a href={person.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={person.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;