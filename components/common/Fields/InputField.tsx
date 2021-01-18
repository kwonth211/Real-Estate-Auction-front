import React from "react";
import { Input as AntInput } from "antd";
import styled from "styled-components";
import { Controller } from "react-hook-form";
import { Form } from "antd";

const Input = styled(AntInput)`
  height: 36px;
  /* margin-bottom: 10px; */
`;
interface props {}
const InputField = ({ type, name, control, rules }) => {
  // const {
  //   label,
  //   error = false,
  //   errorMessage = "* 필수 항목",
  //   required = false,
  //   type,
  // } = props;

  //   const rules = { required: required };
  /* {error && <Error error={error}>{errorMessage}</Error>} */

  // return <Controller as={Input} name={name} type={type} control={control} />;

  return (
    <Controller
      as={Input}
      name={name}
      control={control}
      rules={rules}
      // defaultValue={null}
      type={type}
      // minLength={minLength}
      // maxLength={maxLength}
      placeholder={null}
      addonAfter={null}
      disabled={null}
      border-color={null}
      suffix={null}
      onPressEnter={null}
    />
  );
};

export default InputField;
