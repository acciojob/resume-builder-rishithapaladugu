import React, { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const handleAddSkill = () => {
    if (skill.trim() !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const handleDelete = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Skills</h2>
      <input
        id="skill"
        name="skill"
        placeholder="Skill"
        value={skill}
        onChange={e => setSkill(e.target.value)}
        data-testid="skill-input"
      />
      <button id="add_skill" onClick={handleAddSkill}>Add Skill</button>

      <ul>
        {skills.map((s, index) => (
          <li key={index}>
            {s}
            <button id={`delete_skill_${index}`} onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
