//
// 2020 copyright fastcampus language
//
import React, { useEffect, useState } from "react";
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import KakaoLogin from 'react-kakao-login';
import Link from "next/link";
import _ from "lodash";
import styled from "styled-components";
// import { GoogleLogin } from 'react-google-login';
// import { useForm } from 'react-hook-form/dist/index.ie11';
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Divider } from "antd";

// import Button from '@/components/Button';
// import CheckboxField from '@/components/fields/CheckboxField';
// import InputField from '@/components/fields/InputField';
import Layout from "@/components/layout";
// import { email } from '@/utils/validator';
// import { signInAction } from '@/components/auth/action';
// import { useSession, signInByFacebook, signInByGoogle, signInByKakao } from '@/hooks/session';

// import FacebookIcon from '@/components/assets/icons/Facebook';
// import KakaoIcon from '@/components/assets/icons/Kakao';
// import GoogleIcon from '@/components/assets/icons/Google';
// import ButtonShape from '../myPage/ButtonShape';
// import TagManager from 'react-gtm-module';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  padding-top: 210px;
  padding-bottom: 50px;
  @media (max-width: 640px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 733px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 6px 6px 5px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  position: relative;
  @media (max-width: 640px) {
    border-radius: 0px;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.3px;
  color: #020202;
  line-height: 150%;
  position: relative;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > button {
    width: 49% !important;
  }
  & > a {
    width: 49% !important;
    & > button {
      width: 100% !important;
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 188px;
  font-size: 14px;
  letter-spacing: -0.3px;
  text-align: center;
  color: #525252;
`;

const SocialLoginWrapper = styled.div`
  width: 100%;
  & > div {
    display: flex;
    justify-content: space-evenly;
    width: 290px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 640px) {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const DecoratorWrapper = styled.div`
  display: flex;
`;

const ModelImageWrapper = styled.div`
  position: absolute;
  right: -20px;
  top: -200px;

  & > img {
    width: 366px;
    height: 251px;

    @media (max-width: 640px) {
      width: 278px;
      height: 191px;
    }
  }

  @media (max-width: 640px) {
    right: 10px;
    top: -150px;
  }
`;

const Decorator = styled.div`
  width: 189px;
  height: 189px;
  background: #ffffff;
  border-radius: 100px;
  position: absolute;
  left: 0px;
  top: -95px;
  text-align: center;
`;

const DecoratorTextWrapper = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 42px;
  line-height: 61px;
  text-align: center;
  letter-spacing: -1.3px;
  color: #dadada;

  position: absolute;
  width: 120px;
  height: 61px;
  left: 35px;
  top: 55px;
`;

const ButtonNotice = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 110px;
  margin-bottom: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #979797;
`;

const SocialLoginDesc = styled.div`
  color: #979797;
  margin-bottom: 20px;
  text-align: center;
`;

const getDecoratorText = () => {
  let text = ["Hello,", "你好!", "Hola,", "Hallo,", "Ciao!", "Salut!"].filter(
    (_, idx) => idx === Math.floor(Math.random() * 6)
  )[0];
  return text ? text : "Hello,";
};

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  //   const { handleSubmit, control, errors } = methods;
  const authState = useSelector((state) => state.authState.authResponse);
  const { success: loginSuccess } = authState;
  const { errorStatusCode: cartItemErrorStatusCode } = useSelector(
    (state) => state.multipackState
  );
  const [isFromCart, setIsFromCart] = useState(false);

  const query = router.query["next-action"];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (cartItemErrorStatusCode) {
      if (cartItemErrorStatusCode === 401) {
        setIsFromCart(true);
      }
    }
  }, [cartItemErrorStatusCode]);

  const onSubmit = (data) => {};

  useEffect(() => {
    if (loginSuccess) {
    }
  }, [loginSuccess]);

  //   const emailErrorMessage =
  //     errors.email && errors.email.type === "pattern"
  //       ? "잘못된 이메일 주소입니다"
  //       : "이메일 주소를 입력해주세요";
  //   const passwordErrorMessage = "비밀번호를 입력해주세요";

  return (
    <Layout>
      <Wrapper>
        <Container>
          <DecoratorWrapper>
            <ModelImageWrapper>
              <img src="/static/assets/ryuwon.png" />
            </ModelImageWrapper>
          </DecoratorWrapper>
          {isFromCart ? (
            <Title>
              <span style={{ color: "red", fontWeight: 900 }}>로그인</span> 후
              구매하시면
              <br />
              <span style={{ fontWeight: 900 }}>외국어 공부</span>가 쉬워져요!
            </Title>
          ) : (
            <Title>
              우리 <span style={{ color: "red", fontWeight: 900 }}>로그인</span>
              하고
              <br /> 쉽게 <span style={{ fontWeight: 900 }}>외국어 공부</span>
              해요!
            </Title>
          )}
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="email"
              label="이메일"
              type="email"
              placeholder="이메일 주소를 입력해주세요."
              control={control}
              pattern={email}
              required={true}
              error={errors.email ? true : false}
              errorMessage={emailErrorMessage}
            />
            <InputField
              name="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              control={control}
              required={true}
              error={errors.password ? true : false}
              errorMessage={passwordErrorMessage}
            />
            <CheckboxField
              name="rememberMe"
              label="아이디 저장"
              control={control}
              marginBottom={"40px"}
            />
            <ButtonNotice>회원이 아니시라면,</ButtonNotice>
            <ButtonWrapper>
              <Button
                type="submit"
                label="로그인"
                isLoading={authState.loading}
              />
              <Button label="회원가입" onClick={onSignupButtonClicked} />
            </ButtonWrapper>
            <LinkWrapper>
              <Link
                href={{
                  pathname: "/find-id-password",
                  query: { name: "id" },
                }}
              >
                <a>아이디 찾기</a>
              </Link>
              <div>|</div>
              <Link
                href={{
                  pathname: "/find-id-password",
                  query: { name: "password" },
                }}
              >
                <a>비밀번호 찾기</a>
              </Link>
            </LinkWrapper>
            <Divider
              plain
              style={{ color: "#b6b6b6", fontSize: 18, fontWeight: 300 }}
            >
              or
            </Divider>
            <SocialLoginDesc>
              가벼운 학습지는
              <br />
              소셜 로그인/회원가입이 가능합니다.
            </SocialLoginDesc>
            <SocialLoginWrapper>
              <div>
                <FacebookLogin
                  appId="2574616069238007"
                  fields="email"
                  callback={responseFacebook}
                  disableMobileRedirect={true}
                  render={(renderProps) => (
                    <ButtonShape
                      label="Facebook Login"
                      onClick={(e) => socialLoginFunc(e, renderProps)}
                    >
                      <FacebookIcon />
                    </ButtonShape>
                  )}
                />
                <GoogleLogin
                  clientId="676297627539-ivm0nhi9ve64iiam7qq3c4u539kdbug7.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <ButtonShape
                      label="Google Login"
                      onClick={(e) => socialLoginFunc(e, renderProps)}
                    >
                      <GoogleIcon />
                    </ButtonShape>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                />
                <KakaoLogin
                  token="d18b2ac0f4364fb8fb9de5c863f2cd24"
                  onSuccess={responseKakao}
                  onFail={responseKakao}
                  onLogin={responseKakao}
                  render={(renderProps) => (
                    <ButtonShape
                      label="Kakao Login"
                      onClick={(e) => socialLoginFunc(e, renderProps)}
                    >
                      <KakaoIcon />
                    </ButtonShape>
                  )}
                />
              </div>
            </SocialLoginWrapper>
          </form> */}
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default SignIn;
