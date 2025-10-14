import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProject = () => {
    setProjects([...projects, { projectName, techStack, description }]);
    setProjectName(""); setTechStack(""); setDescription("");
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Add your Mini Projects</h2>
      <input
        id="projectName"
        name="projectName"
        placeholder="Project Name"
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
        data-testid="project-name"
      />
      <input
        id="techStack"
        name="techStack"
        placeholder="Tech Stack"
        value={techStack}
        onChange={e => setTechStack(e.target.value)}
        data-testid="project-tech"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        data-testid="project-description"
      />
      <button id="add_project" onClick={handleAddProject}>Add Project</button>

      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            <b>{p.projectName}</b> ({p.techStack}) - {p.description}
            <button id={`delete_project_${index}`} onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
