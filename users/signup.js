import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client.js";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Sign up</h1>
      {error && <div>{error}</div>}
      <input
      className="form-control w-50 mb-2"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input
      className="form-control w-50 mb-2"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button 
      className="btn btn-primary"
      onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;