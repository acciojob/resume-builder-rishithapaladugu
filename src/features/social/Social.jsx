
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSocial, removeSocial } from "./socialSlice";

export default function Social({ onNext }) {
  const links = useSelector((s) => s.social);
  const dispatch = useDispatch();
  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (!link.trim()) return;
    dispatch(addSocial(link.trim()));
    setLink("");
  };

  return (
    <div>
      <h2>Social Media</h2>

      <div className="form-group">
        <label>Link</label>
        <input
          name="Social"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://github.com/xyz"
        />
        <button id="add_social" onClick={handleAdd}>
          Add
        </button>
      </div>

      {links.map((l, i) => (
        <div className="item" key={i}>
          <a href={l} target="_blank" rel="noreferrer">
            {l}
          </a>
          <button onClick={() => dispatch(removeSocial(i))}>Delete</button>
        </div>
      ))}

      {/* Navigation buttons – MISSING earlier */}
      <div className="nav">
        <button id="back" onClick={() => window.history.back()}>
          Back
        </button>
        <button id="next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
