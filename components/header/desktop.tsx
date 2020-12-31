import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Link from "next/link";
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

export const MiddleMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  height: 20px;

  & > div:nth-child(1) {
    padding-right: 10px;
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  max-width: 220px;
  margin-left: 3px;
  object-fit: contain;
`;

const TopRowText = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  text-align: center;
  color: #000000;
`;

const ChallengeMenuText = styled.div`
  display: flex;
  align-items: center;
  background: #f5333f;
  color: white;
  border-radius: 15px;
  height: 25px;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  -webkit-animation: blink-2 2s ease-in infinite both;
  animation: blink-2 2s ease-in infinite both;
`;

const ShowAllButton = styled.div`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  width: 71px;
  background: black;
  color: white;
  height: 24px;
  border-radius: 4px;
  text-align: center;
  padding-left: 10px;
`;

export const LogoWrapper = styled.div`
  margin-top: 20px;
  margin-left: 3px;
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
  & > a {
    display: flex;
    margin: 0;
    align-items: center;
    & > svg {
      margin-right: 7px;
    }
    color: #979797;
    transition: all 0.5s ease;

    & > svg > g > path {
      fill: #979797;
      transition: all 0.5s ease;
    }
    &:hover {
      color: black;
      & > svg > g > path {
        fill: black;
      }
    }
  }
`;

const Desktop = () => {
  const [sticky, setSticky] = useState(false);

  //   const { scrollY, direction } = useScroll(100);

  //   useEffect(() => {
  //     if (scrollY < 68 || direction === "up") {
  //       setSticky(false);
  //     } else {
  //       setSticky(true);
  //     }
  //   }, [scrollY, direction]);

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
          <MiddleMenu>
            <div>
              <h1>
                {/* <ImgStyled /> */}
                {/* <span>dsadas</span> */}
              </h1>
            </div>
          </MiddleMenu>
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
