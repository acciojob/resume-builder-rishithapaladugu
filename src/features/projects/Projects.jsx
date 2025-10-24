
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, removeProject } from "./projectsSlice";

export default function Projects() {
  const list = useSelector((s) => s.projects);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    projectName: "",
    techStack: "",
    description: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onAdd = () => {
    dispatch(addProject(form));
    setForm({ projectName: "", techStack: "", description: "" });
  };

  return (
    <div>
      <h2>Projects</h2>
      <div className="form-group">
        <label>Project Name</label>
        <input
          name="projectName"
          value={form.projectName}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Tech Stack</label>
        <input name="techStack" value={form.techStack} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          name="description"
          value={form.description}
          onChange={onChange}
        />
      </div>
      <button id="add_project" onClick={onAdd}>
        Add
      </button>

      {list.map((p, i) => (
        <div className="item" key={i}>
          <div>
            <strong>{p.projectName}</strong> ({p.techStack})<br />
            <small>{p.description}</small>
          </div>
          <button id="delete" onClick={() => dispatch(removeProject(i))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
