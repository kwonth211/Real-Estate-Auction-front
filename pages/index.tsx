import React from "react";
// import DocumentTitle from 'react-document-title';
import Header from "./../components/header/header";
import Banner from "./../components/banner/banner";
// import Page1 from "./Page1";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
// import Page4 from "./Page4";
import Footer from "./../components/footer/footer";
import "./home/static/style";

const Home = () => {
  return (
    <div className="home-page">
      <Header key="header" />
      <Banner key="banner" />
      {/* <Page1 key="page1" /> */}
      {/* <Page2 key="page2" /> */}
      {/* <Page3 key="page3" /> */}
      {/* <Page4 key="page4" /> */}
      <Footer key="footer" />
      {/* <DocumentTitle title="凤蝶 - 移动建站平台" /> */}
    </div>
  );
};
export default Home;
