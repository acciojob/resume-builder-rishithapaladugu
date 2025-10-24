
import React from "react";
import { useSelector } from "react-redux";

export default function Resume() {
  const profile = useSelector((s) => s.profile);
  const education = useSelector((s) => s.education);
  const skills = useSelector((s) => s.skills);
  const projects = useSelector((s) => s.projects);
  const social = useSelector((s) => s.social);

  return (
    <div className="container">
      <h2>Resume</h2>
      {profile.url && <img src={profile.url} alt="pic" width="100" />}
      <h3>
        {profile.fname} {profile.lname}
      </h3>
      <p>Phone: {profile.phone}</p>
      <p>Address: {profile.address}</p>

      <h4>Education</h4>
      <ul>
        {education.map((e, i) => (
          <li key={i}>
            {e.courseName} ({e.completionYear}) – {e.college} – {e.percentage}%
          </li>
        ))}
      </ul>

      <h4>Skills</h4>
      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h4>Projects</h4>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <strong>{p.projectName}</strong> ({p.techStack}) – {p.description}
          </li>
        ))}
      </ul>

      <h4>Social</h4>
      <ul>
        {social.map((l, i) => (
          <li key={i}>
            <a href={l} target="_blank" rel="noreferrer">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
