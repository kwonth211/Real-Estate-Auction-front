import React from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { useForm } from 'react-hook-form/dist/index.ie11';
import styled from "styled-components";
// import Button from '@/components/Button';
import Layout from "@/components/layout";
import SignUpForm from "./signupForm";
// import { saveSignUpForm, temporarySaveSignUpForm, signInAction } from '@/components/auth/action';
// import { useSession } from '@/hooks/session';
// import colors from '@/utils/colors';
// import SignUpForm from './SignUpForm';
// import SignUpTerm from './SignUpTerm';
// import TagManager from 'react-gtm-module';

const defaultValue = {
  birthday: null,
  email: null,
  emailCode: null,
  marketing: null,
  mobile: null,
  name: null,
  password: null,
  rePassword: null,
  terms: null,
};

const Wrapper = styled.div`
  /* background-color: #f5f5f5; */
  /* width: 100%;
  height: 100%; */
  padding-top: 30px;
  padding-bottom: 130px;
  @media (max-width: 640px) {
    padding-top: 40px;
    height: auto;
  }
`;

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

const ButtonWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Layout>
      {/* <Wrapper> */}
      <Container>
        <TitleWrapper>
          <Title>회원가입</Title>
        </TitleWrapper>
        <SignUpForm />
      </Container>
      {/* </Wrapper> */}
    </Layout>
  );
};

export default SignUp;
