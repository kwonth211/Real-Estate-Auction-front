import React from "react";
// import useCheckMobile from "@/hooks/useCheckMobile";
import { Collapse } from "antd";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import Link from "next/link";
// import { openNotification } from "@/utils/notification";

const Wrapper = styled.div`
  width: 100%;
`;

const FirstRow = styled.div``;

const SecondRow = styled.div`
  width: 100%;
  background-color: #000;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.3px;
  color: #ffffff;
  @media (max-width: 640px) {
    padding: 15px;
  }
`;

interface ContainerType {
  height: string;
}

const Container = styled.div<ContainerType>`
  width: 100%;
  height: ${(props) => props.height};
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    height: inherit;
  }
`;

const SecondColumn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 166px;
`;
interface FlexdivType {
  itemMarginRight: string;
  maxWidth: string;
}
const FlexDiv = styled.div<FlexdivType>`
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: space-between;
  & > div {
    width: fit-content;
  }
  & div .title {
    font-size: 14px;
    font-weight: bold;
  }
  & div .menu {
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    > div + div {
      margin-top: 10px;
    }
  }
`;

const FooterCompany = styled.div`
  width: 100%;
  max-width: 654px;
  @media (max-width: 640px) {
    padding: 40px 15px;
  }
`;

const FooterInfo = styled.div`
  width: 100%;
  max-width: 300px;
  @media (max-width: 640px) {
    max-width: inherit;
  }
`;

const FooterCopyright = styled.p`
  font-size: 12px;
  @media (max-width: 640px) {
    font-size: 11px;
    letter-spacing: -0.05em;
  }
`;

const Astyled = styled.a`
  color: rgb(110, 110, 110);
`;

const LinkTag = styled.div`
  cursor: pointer;
`;
const menuArray = ["FAQ"];

const Footer = (props) => {
  const { hideFooterBorder = false } = props;
  // const mobile = useCheckMobile();

  const router = useRouter();

  const PcInfo = () => {
    return (
      <FlexDiv itemMarginRight="40px" maxWidth="300px">
        <div>
          <div className="title">Github</div>
          <Astyled
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kwonth211"
          >
            <div className="menu">kwonth211</div>
          </Astyled>
        </div>
      </FlexDiv>
    );
  };

  const moveMenu = (e) => {
    const menuText = e.target.innerText;
    switch (menuText) {
      case "FAQ":
        router.push("/faq");
        break;

      default:
        break;
    }
  };
  return (
    <Wrapper>
      <FirstRow>
        <Container height="195px">
          <FooterCompany>
            {/* <img
              src="/static/assets/logo/txt.png"
              alt="logo"
              style={{ width: 152, objectFit: "contain", marginBottom: 16 }}
            /> */}
            {/* <FlexDiv itemMarginRight="40px" maxWidth="654px">
              <div>
                <strong>저작권:</strong> 네이버 부동산
                <br />
                <strong>Email:</strong> kwonth211@naver.com
              </div>
            </FlexDiv> */}
          </FooterCompany>
          <FooterInfo>{/* <PcInfo /> */}</FooterInfo>
        </Container>
      </FirstRow>
      <SecondRow>
        <Container height="60px">
          <FooterCopyright>
            Copyright © 2020 kwontaehoon. All rights reserved.
            <br />
            <strong>Email:</strong> kwonth211@naver.com
          </FooterCopyright>
          <SecondColumn>
            <Link href="/policy">
              <LinkTag>이용약관</LinkTag>
            </Link>
            <div>|</div>
            <Link href="/policy">
              <LinkTag>개인정보취급방침</LinkTag>
            </Link>
          </SecondColumn>
        </Container>
      </SecondRow>
    </Wrapper>
  );
};

export default Footer;
