
import React, { useState } from "react";
import { connect } from "react-redux";
import { addEducation, deleteEducation } from "../actions";

const Education = ({ education, addEducation, deleteEducation }) => {
  const [formData, setFormData] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(formData);
    setFormData({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: "",
    });
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Completion Year:</label>
          <input
            type="number"
            name="completionYear"
            value={formData.completionYear}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>College/University:</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Percentage/GPA:</label>
          <input
            type="text"
            name="percentage"
            value={formData.percentage}
            onChange={handleChange}
            required
          />
        </div>
        <button id="add_education" type="submit">
          Add Education
        </button>
      </form>

      <div className="education-list">
        <h3>Education Details</h3>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <p>Course: {edu.courseName}</p>
            <p>Year: {edu.completionYear}</p>
            <p>College: {edu.college}</p>
            <p>Percentage: {edu.percentage}</p>
            <button id="delete" onClick={() => deleteEducation(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  education: state.resume.education,
});

export default connect(mapStateToProps, { addEducation, deleteEducation })(
  Education
);
