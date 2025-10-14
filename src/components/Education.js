import React, { useState } from "react";

function Education() {
  const [educations, setEducations] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [completionYear, setCompletionYear] = useState("");
  const [college, setCollege] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleAddEducation = () => {
    setEducations([...educations, { courseName, completionYear, college, percentage }]);
    setCourseName(""); setCompletionYear(""); setCollege(""); setPercentage("");
  };

  const handleDelete = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Add your Education Details</h2>
      <input
        id="courseName"
        name="courseName"
        placeholder="Course Name"
        value={courseName}
        onChange={e => setCourseName(e.target.value)}
        data-testid="education-course"
      />
      <input
        id="completionYear"
        name="completionYear"
        placeholder="Completion Year"
        value={completionYear}
        onChange={e => setCompletionYear(e.target.value)}
        data-testid="education-year"
      />
      <input
        id="college"
        name="college"
        placeholder="College Name"
        value={college}
        onChange={e => setCollege(e.target.value)}
        data-testid="education-college"
      />
      <input
        id="percentage"
        name="percentage"
        placeholder="Percentage"
        value={percentage}
        onChange={e => setPercentage(e.target.value)}
        data-testid="education-percentage"
      />
      <button id="add_education" onClick={handleAddEducation}>Add Education</button>

      <ul>
        {educations.map((edu, index) => (
          <li key={index}>
            {edu.courseName} - {edu.college} ({edu.completionYear}) - {edu.percentage}%
            <button id={`delete_education_${index}`} onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
