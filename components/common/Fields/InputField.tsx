import React from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";

const Input = styled(AntInput)`
  height: 36px;
  margin-bottom: 10px;
`;
interface props {}
const InputField = (props) => {
  const {
    label,
    error = false,
    errorMessage = "* 필수 항목",
    required = false,
    type,
  } = props;

  //   const rules = { required: required };
  /* {error && <Error error={error}>{errorMessage}</Error>} */

  return <Input type={type} />;
};

export default InputField;
