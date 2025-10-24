
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./profileSlice";

export default function Profile() {
  const data = useSelector((s) => s.profile);
  const dispatch = useDispatch();
  const [form, setForm] = useState(data);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSave = () => dispatch(update(form));

  return (
    <div>
      <h2>Profile</h2>
      <div className="form-group">
        <label>First Name</label>
        <input name="fname" value={form.fname} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input name="lname" value={form.lname} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input name="address" value={form.address} onChange={onChange} />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input name="url" value={form.url} onChange={onChange} />
      </div>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
