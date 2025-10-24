
import React, { useState } from "react";
import { connect } from "react-redux";
import { addProject, deleteProject } from "../actions";

const Projects = ({ projects, addProject, deleteProject }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(formData);
    setFormData({
      projectName: "",
      techStack: "",
      description: "",
    });
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tech Stack:</label>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button id="add_project" type="submit">
          Add Project
        </button>
      </form>

      <div className="projects-list">
        <h3>Your Projects</h3>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h4>{project.projectName}</h4>
            <p>Tech Stack: {project.techStack}</p>
            <p>Description: {project.description}</p>
            <button id="delete" onClick={() => deleteProject(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.resume.projects,
});

export default connect(mapStateToProps, { addProject, deleteProject })(
  Projects
);
