import React, { useState } from "react";
import { User } from "../../models";

const LoginForm = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (!name || !password) {
      return;
    }

    onLogin(new User(name, password));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        value={password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
