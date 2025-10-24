
import React, { useState } from "react";
import { connect } from "react-redux";
import { addSocial, deleteSocial } from "../actions";

const SocialMedia = ({ socialMedia, addSocial, deleteSocial }) => {
  const [social, setSocial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (social.trim()) {
      addSocial(social);
      setSocial("");
    }
  };

  return (
    <div className="social-media-section">
      <h2>Social Media</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Social Media Link:</label>
          <input
            type="url"
            name="Social"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
            required
          />
        </div>
        <button id="add_social" type="submit">
          Add Social Media
        </button>
      </form>

      <div className="social-media-list">
        <h3>Your Social Media Links</h3>
        <ul>
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a href={social} target="_blank" rel="noopener noreferrer">
                {social}
              </a>
              <button onClick={() => deleteSocial(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  socialMedia: state.resume.socialMedia,
});

export default connect(mapStateToProps, { addSocial, deleteSocial })(
  SocialMedia
);
