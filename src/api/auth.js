import { badRequest, jsonResponse, sendJsonPost } from "@/api/common.js";

export const callRegister = async (payload) => {
  const response = await sendJsonPost("/starlight/register", {
    qq: parseInt(payload.qq),
    email: payload.email,
    emailVerifyCode: payload.verificationCode,
    password: payload.password,
    inviteCode: payload.inviteCode,
  });
  if (response.status === 400) {
    return badRequest();
  } else {
    return await jsonResponse(response);
  }
};
