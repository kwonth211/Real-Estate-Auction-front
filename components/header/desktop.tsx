import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Link from "next/link";

import { useSession } from "@/hooks/session";

// import LoginMenu from './LoginMenu';
// import BottomMenu from './BottomMenu';
// import Login from '../assets/icons/Login';
// import { useScroll } from '@/hooks/useScroll';

export const DesktopContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1620px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const TopRow = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: flex-end;
`;

export const SignMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  height: 20px;
`;

export const ImageDiv = styled.div`
  width: 100%;
  max-width: 220px;
  margin-left: 3px;
  object-fit: contain;
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-left: 3px;
  color: black;
`;

export const TopContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
const fadeOut = keyframes`
    0% {
      opacity: 1;

    }
    100% {
      opacity: 0;

    }
`;
const fadeIn = keyframes`
   0% {
      opacity: 0;

    }
    100% {
      opacity: 1;
    }
`;

export const OneMoreMenuText = styled.div`
  display: flex;
  color: #ffffff;
  border-radius: 12px;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
  height: 30px;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  background: rgba(245, 51, 63, 0.75);
`;

const LoginWrapper = styled.div`
  display: inline;
  margin-right: 30px;
  & > a {
    & > svg {
      margin-right: 7px;
    }
    color: black;
    transition: all 0.5s ease;
  }
`;

const Desktop = () => {
  const [session, loading] = useSession();

  if (loading) {
    return null;
  }
  return (
    <DesktopContainer>
      <TopContainer>
        <ImageDiv>
          <Link href="/">
            <a>
              <LogoWrapper>
                <img src={"/static/assets/logo/law.png"} width={50} />
                부동산 경매
              </LogoWrapper>
            </a>
          </Link>
        </ImageDiv>
        <TopRow>
          <SignMenu>
            <div>
              <h1>
                {session ? (
                  <>
                    <Link href="/signin">
                      <LoginWrapper>
                        <a>{session.name}님</a>
                      </LoginWrapper>
                    </Link>
                    <Link href="/signout">
                      <LoginWrapper>
                        <a>로그아웃</a>
                      </LoginWrapper>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/signin">
                      <LoginWrapper>
                        <a>로그인</a>
                      </LoginWrapper>
                    </Link>

                    <Link href="/signup">
                      <LoginWrapper>
                        <a>회원가입</a>
                      </LoginWrapper>
                    </Link>
                  </>
                )}
              </h1>
            </div>
          </SignMenu>
          {/* {session ? (
            <LoginMenu />
          ) : (
            <Link href="/signin">
              <LoginWrapper>
                <a>
                  <Login />
                  로그인
                </a>
              </LoginWrapper>
            </Link>
          )} */}
        </TopRow>
      </TopContainer>

      {/* <BottomContainer sticky={sticky}>{!sticky && <BottomMenu />}</BottomContainer> */}
    </DesktopContainer>
  );
};

export default Desktop;
