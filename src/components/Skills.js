
import React, { useState } from "react";
import { connect } from "react-redux";
import { addSkill, deleteSkill } from "../actions";

const Skills = ({ skills, addSkill, deleteSkill }) => {
  const [skill, setSkill] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim()) {
      addSkill(skill);
      setSkill("");
    }
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Skill:</label>
          <input
            type="text"
            name="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            required
          />
        </div>
        <button id="add_skill" type="submit">
          Add Skill
        </button>
      </form>

      <div className="skills-list">
        <h3>Your Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              <button id="delete_skill" onClick={() => deleteSkill(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.resume.skills,
});

export default connect(mapStateToProps, { addSkill, deleteSkill })(Skills);
