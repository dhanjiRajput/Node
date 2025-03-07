import React, { useState } from 'react'
import { API } from '../config/API';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await API.post("/users/login", formData)
      Cookies.set("token", res.data.token)
      alert("success")
      nav("/")
    } catch (error) {
      console.log(error);
      alert("error")

    }

  };

  return (
    <div className="container mt-5">
      <h2>login </h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">login</button>
      </form>
    </div>
  )
}

export default Login