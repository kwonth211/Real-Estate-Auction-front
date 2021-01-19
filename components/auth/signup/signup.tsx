import React from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Layout from "@/components/layout";
import { Form, Select, Checkbox, Button } from "antd";
import { useForm } from "react-hook-form";
import Field from "@/components/common/Fields";
import { email } from "@/libs/validator";
import { signup } from "./action";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: auto;
  margin-top: 130px;
  padding: 40px;
  padding-top: 30px;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);

  background-color: #ffffff;
  @media (max-width: 640px) {
    padding-top: 40px;
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 24px !important;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #020202 !important;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  & > div {
    font-size: 16px;
    color: #b6b6b6;
  }
  & .step {
    font-weight: bold;
  }
`;

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

export type formValue = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};
const defaultValues = {
  email: "",
  nickname: "",
  name: "",
  password: "",
  rePassword: "",
};
const SignUp = () => {
  const methods = useForm({
    defaultValues: defaultValues,
  });
  const dispatch = useDispatch();

  const { handleSubmit, errors, control, getValues } = methods;

  const onSubmit = (data: formValue) => {
    console.log("form data>>>", data);
    dispatch(signup(data));
  };

  const checkPasswordFunc = (resetPassword) =>
    getValues("password") === resetPassword;

  let rePasswordErrorMessage = "";
  if (errors.rePassword && errors.rePassword.type === "validate") {
    rePasswordErrorMessage = "비밀번호가 일치하지 않습니다.";
  }
  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <Title>회원가입</Title>
        </TitleWrapper>
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
          <Field
            label="닉네임"
            name="nickname"
            required={true}
            methods={methods}
          />
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
      </Container>
    </Layout>
  );
};

export default SignUp;
