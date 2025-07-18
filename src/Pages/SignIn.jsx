import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:7000/auth/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include", // Add if using cookies like JWT
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Login successful!");
        navigate('/');
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Something went wrong during login.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Signin;
