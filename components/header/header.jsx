import React from "react";
import styled from "@emotion/styled";

const ImgStyled = styled.img`
  width: 30px;
  height: 32px;
`;

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <ImgStyled src={"/static/assets/logo/law.png"} />
          부동산 경매
          {/* <span>dsadas</span> */}
        </h1>
      </div>
    </header>
  );
}
