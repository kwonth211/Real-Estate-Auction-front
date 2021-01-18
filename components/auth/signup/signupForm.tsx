import React, { useState } from "react";
import styled from "styled-components";
import { Form, Select, Checkbox, Button } from "antd";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Field from "@/components/common/Fields";
import { email } from "@/libs/validator";
import { signUp } from "./action";

const { Option } = Select;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const EmailButton = styled(Button)``;

const EamilWrapper = styled.div`
  display: flex;
  & > div:nth-child(1) {
    flex: auto;
    margin-right: 10px;
  }
  button {
    margin-top: 30px;
  }
`;

const defaultValues = {
  email: "",
  nickname: "",
  name: "",
  password: "",
  rePassword: "",
};

export type formValue = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};

const SignupForm = () => {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  const dispatch = useDispatch();

  const { handleSubmit, errors, control, getValues } = methods;

  const onSubmit = (data: formValue) => {
    console.log("form data>>>", data);
    dispatch(signUp(data));
  };

  const checkPasswordFunc = (resetPassword) =>
    getValues("password") === resetPassword;

  let rePasswordErrorMessage = "";
  if (errors.rePassword && errors.rePassword.type === "validate") {
    rePasswordErrorMessage = "비밀번호가 일치하지 않습니다.";
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EamilWrapper>
        <Field
          label="이메일"
          name="email"
          required={true}
          methods={methods}
          pattern={email}
        />
        <EmailButton>인증하기</EmailButton>
      </EamilWrapper>
      <Field label="닉네임" name="nickname" required={true} methods={methods} />
      <Field label="이름" name="name" required={true} methods={methods} />
      <Field
        label="비밀번호"
        name="password"
        type="password"
        minLength={5}
        required={true}
        methods={methods}
      />
      <Field
        label="비밀번호 확인"
        name="rePassword"
        type="password"
        errorMessage={rePasswordErrorMessage}
        required={true}
        methods={methods}
        validate={checkPasswordFunc}
      />

      <Checkbox>
        I have read the <a href="">agreement</a>
      </Checkbox>
      <SubmitButton type="primary" htmlType="submit">
        회원가입
      </SubmitButton>
    </form>
  );
};

export default SignupForm;
