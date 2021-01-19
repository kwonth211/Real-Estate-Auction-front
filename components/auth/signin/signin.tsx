import React, { useEffect, useState } from "react";
import Link from "next/link";
import _ from "lodash";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Button } from "antd";
import { useForm } from "react-hook-form";

import Field from "@/components/common/Fields";
import { email } from "@/libs/validator";
import Layout from "@/components/layout";
import { signin } from "./action";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 70vh;
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
  width: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export type formValue = {
  email: string;
  password: string;
};

const defaultValues: formValue = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //   const { handleSubmit, control, errors } = methods;
  // const authState = useSelector((state) => state.authState.authResponse);
  // const { success: loginSuccess } = authState;
  // const { errorStatusCode: cartItemErrorStatusCode } = useSelector(
  //   (state) => state.multipackState
  // );
  const methods = useForm({
    defaultValues: defaultValues,
  });

  const { handleSubmit, errors, control, getValues } = methods;

  const onSubmit = (data: formValue) => {
    console.log("form data>>>", data);
    dispatch(signin(data));
  };

  //   const emailErrorMessage =
  //     errors.email && errors.email.type === "pattern"
  //       ? "잘못된 이메일 주소입니다"
  //       : "이메일 주소를 입력해주세요";
  //   const passwordErrorMessage = "비밀번호를 입력해주세요";

  return (
    <Layout>
      <Container>
        <TitleWrapper>
          <Title>로그인</Title>
        </TitleWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="이메일"
            name="email"
            required={true}
            methods={methods}
            pattern={email}
          />

          <Field
            label="비밀번호"
            name="password"
            type="password"
            minLength={5}
            required={true}
            methods={methods}
          />

          <ButtonWrapper>
            <SubmitButton
              type="primary"
              onClick={() => {
                router.push("/signup");
              }}
            >
              회원가입
            </SubmitButton>
            <SubmitButton type="primary" htmlType="submit">
              로그인
            </SubmitButton>
          </ButtonWrapper>
        </form>
      </Container>
    </Layout>
  );
};

export default SignIn;
