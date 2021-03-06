import React, { useEffect } from "react";
import styled from "styled-components";
import { Header } from "@/components/header";
import Footer from "./footer";
import Head from "next/head";

// import test from "@/components/footer/footer";

const Wrapper = styled.div`
  overflow: hidden;
  max-width: ${(props) => "1920px"};
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Container = styled.div`
  max-width: 1650px;
  margin: 0 auto;
  margin-top: 80px;
  /* position: relative; */
  /* height: 100vh; */
  @media (max-width: 640px) {
    margin-top: 50px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:type" content="website" />
        </Head>
        <Header key="header" />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer key="footer" />
      </Wrapper>
    </>
  );
};
export default Layout;
