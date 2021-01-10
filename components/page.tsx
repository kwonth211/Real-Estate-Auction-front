import React from "react";
import { Layout } from "antd";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
  &.boxed {
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 992px) {
    &.boxed {
      max-width: 95%;
    }
  }
  .workspace {
    height: ${(props) => `calc(100vh - ${props.theme.layoutHeaderHeight})`};
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    flex-grow: 1;
    flex-direction: row;
  }
  .workspace > .ant-layout {
    overflow-x: hidden;
  }
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  position: relative;
  background-color: white;
  min-height: ${(props) => `calc(100vh - ${props.theme.layoutHeaderHeight})`};
`;
const { Content } = Layout;

const NonDashboardRoutes = [
  "/signin",
  "/signup",
  "/forgot",
  "/lockscreen",
  "/_error",
];

const Page = ({ router, children }) => {
  //   const [state] = useAppState();
  //   const sessionExist = useSession();

  return (
    // <ThemeProvider>
    // <Container>
    <Layout>
      <Layout>
        <Content>
          {children}
          {/* <Inner>{children}</Inner> */}
        </Content>
      </Layout>
    </Layout>
    // </Container>
    // </ThemeProvider>
  );
};

export default withRouter(Page);
