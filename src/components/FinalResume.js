import React from "react";
import { connect } from "react-redux";

const FinalResume = ({ profile, education, skills, projects, socialMedia }) => {
  return (
    <div className="final-resume">
      <h1>Your Resume</h1>
      <div className="resume-header">
        {profile.url && <img src={profile.url} alt="Profile" />}
        <h2>
          {profile.fname} {profile.lname}
        </h2>
        <p>Phone: {profile.phone}</p>
        <p>Address: {profile.address}</p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.courseName}</h4>
            <p>
              {edu.college} - {edu.completionYear}
            </p>
            <p>Score: {edu.percentage}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="resume-section">
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index}>
            <h4>{project.projectName}</h4>
            <p>Tech Stack: {project.techStack}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3>Social Media</h3>
        <ul>
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a href={social} target="_blank" rel="noopener noreferrer">
                {social}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.resume.profile,
  education: state.resume.education,
  skills: state.resume.skills,
  projects: state.resume.projects,
  socialMedia: state.resume.socialMedia,
});

export default connect(mapStateToProps)(FinalResume);
