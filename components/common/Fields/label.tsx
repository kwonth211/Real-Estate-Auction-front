import React, { FC } from "react";
import styled from "styled-components";

const Label = styled.div`
  display: block;
  margin-bottom: 5px;
  span {
    color: #f5333f;
  }
`;
interface props {
  required: boolean;
  children: any;
}
const LabelComponent: FC<props> = ({ children, required }) => {
  return (
    <Label>
      {required && <span>*</span>}
      {children}
    </Label>
  );
};

export default LabelComponent;
