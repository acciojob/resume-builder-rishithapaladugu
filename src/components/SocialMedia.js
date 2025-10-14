import React, { useState } from "react";

function SocialMedia() {
  const [links, setLinks] = useState([]);
  const [social, setSocial] = useState("");

  const handleAddSocial = () => {
    if (social.trim() !== "") {
      setLinks([...links, social]);
      setSocial("");
    }
  };

  const handleDelete = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Social Media</h2>
      <input
        id="social"
        name="Social"
        placeholder="Social Media URL"
        value={social}
        onChange={e => setSocial(e.target.value)}
        data-testid="social-input"
      />
      <button id="add_social" onClick={handleAddSocial}>Add</button>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link}
            <button id={`delete_social_${index}`} onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;
