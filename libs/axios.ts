//
// Copyright 2020 fastcampus language
//

import Axios from "axios";

// import { refreshSession } from '@/hooks/session';

const RESPONSE_STATUS_CODE_NO_SESSION = 401;
const RESPONST_STATUS_CODE_INTERNAL = 500;

const axios = Axios.create({
  baseURL: "http://localhost:8000",
  // baseURL: "http://2746070368c7.ngrok.io",
  //   withCredentials: true,
});

const successHandler = (res) => {
  return res;
};

const errorHandler = (error) => {
  const { statusCode } = error?.response?.data?.error;
  if (statusCode === RESPONSE_STATUS_CODE_NO_SESSION) {
    // refreshSession();
  }
  if (statusCode === RESPONST_STATUS_CODE_INTERNAL) {
    const erressage = {
      response: {
        data: { message: "오류가 발생했습니다. 잠시후 다시 시도해주세요" },
      },
    };
    return Promise.reject(erressage);
  }
  return Promise.reject(error);
};

// defaultAxios.interceptors.response.use(successHandler, errorHandler);

// const emailAxios = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_EMAIL_SERVER_URL,
//   withCredentials: true,
// });

// const wordpressAxios = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   withCredentials: true,
//   headers: { 'Content-Type': 'text/html' },
// });

export { axios };
// module.exports = {
//   axios,
// };
