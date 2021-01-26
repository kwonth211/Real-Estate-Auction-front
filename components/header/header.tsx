import React from "react";
import styled from "styled-components";
import Desktop from "./desktop";

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: white;
  z-index: 100;
  background: #ffffff;
  box-shadow: 6px 6px 5px rgba(0, 0, 0, 0.08);
`;

export default function Header(props) {
  return (
    <Wrapper {...props}>
      <Desktop />
    </Wrapper>
  );
}
