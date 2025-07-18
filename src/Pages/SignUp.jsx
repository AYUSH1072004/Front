import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '',phone: '', password: '' });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/auth/api/signup",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body:JSON.stringify(form)
      });

      const data = await response.json();
      console.log(data);


      if(response.ok){
        alert("success");
        navigate('/');
      }
      else{
        alert("error");
      }

    } catch (error) {
      alert("somethin error",error);
    }

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          name="username"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-black  focus:outline-none focus:ring-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border rounded-md  text-black  focus:outline-none focus:ring-2"
        />
         <input
          name="phone"
          type="number"
          placeholder="phone"
          onChange={handleChange}
          className="w-full p-2 border rounded-md text-black  focus:outline-none focus:ring-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
