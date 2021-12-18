import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const initialData = {
  username: "",
  password: "",
};

const Login = ({ loginUser }) => {
  const [loginData, setLoginData] = useState(initialData);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.username === "foo" && loginData.password === "bar") {
      loginUser();
      setLoginData(initialData);
      history.push("/home");
    }
  };

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginAsGuest = () => {
    loginUser();
    history.push("/home");
  };

  return (
    <main className="page-100">
      <Wrapper className="section-center">
        <div className="login-form">
          <h2>Login</h2>
          <p>Login to access all the features of the app!</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email</label>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Enter username"
              value={loginData.username}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              value={loginData.password}
              onChange={handleInputChange}
              required
            />
            <button className="btn" type="submit">
              Login
            </button>
            <div className="title">OR</div>
          </form>
          <button className="btn-secondary" onClick={loginAsGuest}>
            Login as Guest
          </button>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.article`
  min-height: 60vh;
  margin: 4rem auto;
  border-radius: var(--radius);
  border: 1px solid var(--clr-primary-8);
  background: var(--clr-white);
  padding: 2rem;
  @media screen and (min-width: 480px) {
    max-width: 500px;
  }
  .login-form {
    padding: 1rem;

    h2 {
      color: var(--clr-primary-5);
    }

    label {
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      background: var(--clr-primary-10);
      font-size: 1rem;
      margin-bottom: 0.75rem;
      border-radius: var(--radius);
      border: transparent;
      outline: none;
    }
    button {
      margin: 0.5rem 0;
      font-size: 1rem;
      padding: 0.75rem;
      width: 100%;
    }

    .title {
      text-align: center;
    }
  }
`;

export default Login;
