import path from "path-browserify";

const apiBase = "/api"; // For testing

export const badRequest = () => {
  return {
    status: "failed",
    error: "400 Bad Request",
    errorMessage: "400 Bad Request",
  };
};

export const jsonResponse = async (response) => {
  return JSON.parse(await response.text());
};

export const sendJsonPost = (endpoint, data) => {
  return sendPostRequest(endpoint, "application/json", JSON.stringify(data));
};

export const sendPostRequest = (endpoint, dataType, data) => {
  return fetch(path.join(apiBase, endpoint), {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: data,
  });
};
