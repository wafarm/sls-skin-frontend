import styled from "styled-components";
import { InputGroup } from "@/components/form/input-group.jsx";
import { VscAccount, VscLock } from "react-icons/vsc";
import {
  ActionButtonPrimary,
  ActionButtonSecondary,
} from "@/components/button/action-button.jsx";
import { useState } from "react";
import { rootDir } from "@/pages/auth/_routes.jsx";
import path from "path-browserify";
import { useNavigate } from "react-router-dom";
import { AuthContainer, AuthForm, AuthHint } from "@/pages/auth/common.jsx";

const LoginOptionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #007bff;
  }

  a:hover {
    color: #0056b3;
  }
`;

const ActionButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex-grow: 1;
  }
`;

export const LoginPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleCheckChange = (event) => {
    setInputs({ ...inputs, remember: event.target.checked });
  };

  const handleSubmit = (event) => {
    // do nothing currently
    event.preventDefault();
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate(path.join(rootDir, "register"));
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <AuthHint>登录以管理您的皮肤</AuthHint>
        <InputGroup
          name="username"
          value={inputs.username}
          onChange={handleChange}
          type="text"
          placeholder="用户名"
          icon={<VscAccount />}
        />
        <InputGroup
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type="password"
          placeholder="密码"
          icon={<VscLock />}
        />
        <LoginOptionGroup>
          <label>
            <input
              name="remember"
              checked={inputs.remember}
              type="checkbox"
              onChange={handleCheckChange}
            />
            记住我
          </label>
          <a href={path.join(rootDir, "reset")}>
            <span>忘记密码</span>
          </a>
        </LoginOptionGroup>
        <ActionButtonGroup>
          <ActionButtonPrimary>登录</ActionButtonPrimary>
          <ActionButtonSecondary onClick={handleRegister}>
            注册
          </ActionButtonSecondary>
        </ActionButtonGroup>
      </AuthForm>
    </AuthContainer>
  );
};
