import { useState } from "react";
import {
  VscAccount,
  VscCheckAll,
  VscDiffAdded,
  VscLock,
  VscMail,
} from "react-icons/vsc";
import styled from "styled-components";

import {
  ActionButtonPrimary,
  ActionButtonSecondary,
} from "@/components/button/action-button.jsx";
import { InputGroup } from "@/components/form/input-group.jsx";
import { AuthContainer, AuthForm, AuthHint } from "@/pages/auth/common.jsx";

const VerificationCodeGroup = styled.div`
  display: flex;
  button {
    min-width: fit-content;
    max-width: fit-content;
  }
`;

const ErrorMessage = styled.span`
  color: red;
`;

export const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    qq: "",
    password: "",
    repeatPassword: "",
    inviteCode: "",
    verificationCode: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const checkEmail = (email) => {
    return email.match(
      /^(?=.{1,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
  };

  const checkQQ = (qq) => {
    return qq.match(/^\d{5,20}$/);
  };

  const checkPasswordStrength = (password) => {
    return password.length >= 6;
  };

  const checkPassword = (password, repeatPassword) => {
    return password === repeatPassword;
  };

  const checkInviteCode = (inviteCode) => {
    return inviteCode.length === 6;
  };

  const checkVerificationCode = (verificationCode) => {
    return verificationCode.length === 6;
  };

  const checkInput = () => {
    return (
      checkEmail(inputs.email) &&
      checkQQ(inputs.qq) &&
      checkPasswordStrength(inputs.password) &&
      checkPassword(inputs.password, inputs.repeatPassword) &&
      checkInviteCode(inputs.inviteCode) &&
      checkVerificationCode(inputs.verificationCode)
    );
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // This part needs refactoring
    if (name === "email") {
      if (!checkEmail(value)) {
        setErrorMessage("邮箱格式不正确");
      } else {
        setErrorMessage("");
      }
    } else if (name === "qq") {
      // allow only numbers in qq field
      if (!value.match(/^\d*$/)) {
        return;
      }
    } else if (name === "password") {
      if (!checkPasswordStrength(value)) {
        setErrorMessage("密码至少要有 6 位");
      } else {
        setErrorMessage("");
      }
    } else if (name === "repeatPassword") {
      if (!checkPassword(inputs.password, value)) {
        setErrorMessage("重复密码不匹配");
      } else {
        setErrorMessage("");
      }
    } else if (name === "inviteCode") {
      if (!checkInviteCode(value)) {
        setErrorMessage("邀请码必须为 6 位");
      } else {
        setErrorMessage("");
      }
    } else if (name === "") {
      if (!checkVerificationCode(value)) {
        setErrorMessage("验证码码必须为 6 位");
      } else {
        setErrorMessage("");
      }
    } else {
      // Should never execute
      setErrorMessage("");
    }

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    // do nothing currently
    event.preventDefault();
    if (!checkInput()) {
      setErrorMessage("一个或多个输入不正确");
    } else {
      // submit login form
    }
  };

  const handleSendVerificationCode = (event) => {
    event.preventDefault();
    if (checkEmail(inputs.email)) {
      // send verification code
    } else {
      setErrorMessage("邮箱格式不正确");
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <AuthHint>欢迎加入 StarLight 大家庭！</AuthHint>
        <InputGroup
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="text"
          placeholder="邮箱"
          icon={<VscMail />}
        />
        <InputGroup
          name="qq"
          value={inputs.qq}
          onChange={handleChange}
          type="text"
          pattern="[0-9]*"
          placeholder="QQ"
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
        <InputGroup
          name="repeatPassword"
          value={inputs.repeatPassword}
          onChange={handleChange}
          type="password"
          placeholder="重复密码"
          icon={<VscCheckAll />}
        />
        <InputGroup
          name="inviteCode"
          value={inputs.inviteCode}
          onChange={handleChange}
          type="text"
          placeholder="邀请码"
          icon={<VscDiffAdded />}
        />
        <VerificationCodeGroup>
          <InputGroup
            name="verificationCode"
            value={inputs.verificationCode}
            onChange={handleChange}
            type="text"
            placeholder="验证码"
          />
          <ActionButtonSecondary onClick={handleSendVerificationCode}>
            发送验证码
          </ActionButtonSecondary>
        </VerificationCodeGroup>

        <ErrorMessage>{errorMessage}</ErrorMessage>
        <ActionButtonPrimary>注册</ActionButtonPrimary>
      </AuthForm>
    </AuthContainer>
  );
};
