import styled from "styled-components";
import { Card } from "@/components/card/card.jsx";
import { InputGroup } from "@/components/form/input-group.jsx";
import { VscAccount, VscLock } from "react-icons/vsc";
import { ActionButtonPrimary } from "@/components/button/action-button.jsx";

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

const LoginBanner = styled.span`
  font-family: "SL Logo", serif;
  font-size: 50px;
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
  return (
    <LoginContainer>
      <LoginBanner>StarLight</LoginBanner>
      <LoginCard>
        <LoginHint>登录以管理您的皮肤</LoginHint>
        <InputGroup type="text" placeholder="用户名" icon={<VscAccount />} />
        <InputGroup type="password" placeholder="密码" icon={<VscLock />} />
        <LoginOptionGroup>
          <label>
            <input type="checkbox" />
            记住我
          </label>
          <a href="#">
            <span>忘记密码</span>
          </a>
        </LoginOptionGroup>
        <ActionButtonPrimary>登录</ActionButtonPrimary>
      </LoginCard>
    </LoginContainer>
  );
};
