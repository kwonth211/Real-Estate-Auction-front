//
// Copyright 2020 Fastcampus Language
//
import React from "react";
import { Layout } from "antd";
import { ThemeProvider } from "styled-components";
import { withRouter } from "next/router";

// import MainMenu from './MainMenu';
import { Container, Inner } from "./styles/Page";
import { theme } from "./styles/GlobalStyles.js";
// import { useAppState } from './shared/AppProvider';
// import { useSession } from '@/hooks/session';

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
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Layout className="workspace">
          <Layout>
            <Content>
              <Inner>{children}</Inner>
            </Content>
          </Layout>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};

export default withRouter(Page);
