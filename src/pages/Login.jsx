import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      login({ username });
      navigate("/home");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;