import React from "react";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import styled from "styled-components";

import BannerImage from "./BannerImage";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const QueueAnimStyled = styled(QueueAnim)`
  display: flex;
  align-items: center;
`;

const Banner: React.FC = () => {
  return (
    <Wrapper>
      <QueueAnimStyled
        className={`Banner-content-wrapper`}
        delay={300}
        key={"1fasfasfsa"}
        ease="easeOutQuart"
      >
        <div>
          <h1 key="h2">부동산 </h1>
          <p key="p">경매 매물을 한눈에 보세요!</p>
          <span key="button">
            <Button
              type="primary"
              onClick={() => {
                window.location.href = "/activity/home";
              }}
            >
              시작하기
            </Button>
          </span>
        </div>
      </QueueAnimStyled>
      <div>
        <BannerImage />
      </div>
    </Wrapper>
  );
};

export default Banner;
