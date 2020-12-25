import React from "react";
import { Collapse } from "antd";
import styled from "styled-components";

const MobileInfoWrapper = styled(Collapse)`
  padding: 15px;
  background: #fff;
  .ant-collapse-header {
    padding-left: 16px !important;
    font-weight: bold;
  }
  .ant-collapse-arrow {
    left: inherit !important;
    right: 16px;
    svg {
    }
  }
`;

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

const menuArray = ["FAQ"];

const Astyled = styled.a`
  color: rgb(110, 110, 110);
`;
const MobileInfo = () => {
  const { Panel } = Collapse;
  return (
    <MobileInfoWrapper>
      <Panel header="Community" key="1">
        <Astyled
          target="_blank"
          style={{ color: "rgb(110,110,110)" }}
          rel="noopener noreferrer"
          href="https://cafe.naver.com/qingqing2"
        >
          <div className="menu">중국어 카페</div>
        </Astyled>
        <Astyled
          target="_blank"
          style={{ color: "rgb(110,110,110)" }}
          rel="noopener noreferrer"
          href="https://cafe.naver.com/myspanish"
        >
          <div className="menu">유럽어 카페</div>
        </Astyled>
      </Panel>
      <Panel header="Customer" key="2">
        {menuArray.map((e, i) => (
          <div key={i} className="menu" onClick={moveMenu}>
            {e}
          </div>
        ))}
      </Panel>
    </MobileInfoWrapper>
  );
};
