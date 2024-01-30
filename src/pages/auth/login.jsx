import styled from "styled-components";
import { Card } from "@/components/card/card.jsx";
import { InputGroup } from "@/components/form/input-group.jsx";
import { VscAccount, VscLock } from "react-icons/vsc";
import { ActionButtonPrimary } from "@/components/button/action-button.jsx";
import { useState } from "react";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  user-select: none;
`;

const LoginCard = styled(Card)`
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const LoginBanner = styled.span`
  font-family: "SL Logo", serif;
  font-size: 3.125rem;
  color: azure;
`;

const LoginHint = styled.span`
  color: gray;
  text-align: center;
`;

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

export const LoginPage = () => {
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

  return (
    <LoginContainer>
      <LoginBanner>StarLight</LoginBanner>
      <LoginCard>
        <LoginForm onSubmit={handleSubmit}>
          <LoginHint>登录以管理您的皮肤</LoginHint>
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
            <a href="#">
              <span>忘记密码</span>
            </a>
          </LoginOptionGroup>
          <ActionButtonPrimary>登录</ActionButtonPrimary>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
};
