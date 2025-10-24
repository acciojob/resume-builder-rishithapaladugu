
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, removeSkill } from "./skillsSlice";

export default function Skills() {
  const skills = useSelector((s) => s.skills);
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");

  const onAdd = () => {
    if (!skill.trim()) return;
    dispatch(addSkill(skill.trim()));
    setSkill("");
  };

  return (
    <div>
      <h2>Skills</h2>
      <div className="form-group">
        <label>Skill</label>
        <input
          name="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button id="add_skill" onClick={onAdd}>
          Add
        </button>
      </div>
      {skills.map((s, i) => (
        <div className="item" key={i}>
          <span>{s}</span>
          <button id="delete_skill" onClick={() => dispatch(removeSkill(i))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
