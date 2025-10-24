
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./educationSlice";

export default function Education() {
  const list = useSelector((s) => s.education);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onAdd = () => {
    dispatch(add(form));
    setForm({
      courseName: "",
      completionYear: "",
      college: "",
      percentage: "",
    });
  };

  return (
    <div>
      <h2>Education</h2>
      <div className="form-group">
        <label>Course</label>
        <input name="courseName" value={form.courseName} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Year</label>
        <input
          name="completionYear"
          value={form.completionYear}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>College</label>
        <input name="college" value={form.college} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Percentage</label>
        <input name="percentage" value={form.percentage} onChange={onChange} />
      </div>
      <button id="add_education" onClick={onAdd}>
        Add
      </button>

      {list.map((edu, i) => (
        <div className="item" key={i}>
          <span>
            {edu.courseName} ({edu.completionYear})
          </span>
          <button id="delete" onClick={() => dispatch(remove(i))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
