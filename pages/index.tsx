import React from "react";

import Banner from "./../components/banner/banner";
import Table from "../components/table/courtTable";
import Layout from "./../components/layout";
// import "./home/static/style";

const Main = () => {
  return (
    <Layout>
      <Banner key="banner" />
      <Table key="page1" />
    </Layout>
  );
};
export default Main;
