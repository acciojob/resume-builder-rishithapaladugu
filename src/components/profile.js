import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "./actions";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);

  const [form, setForm] = useState(profile);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});
  const handleSave = () => dispatch(setProfile(form));

  return (
    <div>
      <h2>Add your profile details</h2>
      <input name="fname" data-testid="fname-input" placeholder="First Name" value={form.fname || ""} onChange={handleChange} />
      <input name="lname" data-testid="lname-input" placeholder="Last Name" value={form.lname || ""} onChange={handleChange} />
      <input name="phone" data-testid="phone-input" placeholder="Phone" value={form.phone || ""} onChange={handleChange} />
      <input name="address" data-testid="address-input" placeholder="Address" value={form.address || ""} onChange={handleChange} />
      <input name="url" data-testid="url-input" placeholder="Profile Image URL" value={form.url || ""} onChange={handleChange} />
      <button id="save_continue" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
