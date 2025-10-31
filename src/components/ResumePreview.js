import React from "react";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const { profile, education, skills, projects, social } = useSelector(state => state);

  return (
    <div>
      <h2>Resume Preview</h2>

      <h3>Profile</h3>
      <p>{profile.fname} {profile.lname}</p>
      <p>{profile.phone}</p>
      <p>{profile.address}</p>
      {profile.url && <img src={profile.url} alt="Profile" width="100" />}

      <h3>Education</h3>
      <ul>
        {education.map((edu, i) => (
          <li key={i}>{edu.courseName} - {edu.college} ({edu.completionYear}) [{edu.percentage}%]</li>
        ))}
      </ul>

      <h3>Skills</h3>
      <ul>{skills.map((s, i) => <li key={i}>{s}</li>)}</ul>

      <h3>Projects</h3>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>{p.projectName} - {p.techStack}: {p.description}</li>
        ))}
      </ul>

      <h3>Social Media</h3>
      <ul>{social.map((s, i) => <li key={i}><a href={s} target="_blank">{s}</a></li>)}</ul>
    </div>
  );
};

export default ResumePreview;
