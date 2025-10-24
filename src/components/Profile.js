
import React, { useState } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../actions";

const Profile = ({ profile, updateProfile }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  };

  return (
    <div className="profile-section">
      <h2>Profile Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.resume.profile,
});

export default connect(mapStateToProps, { updateProfile })(Profile);
