import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { Form } from "antd";

import Label from "./label";
import InputField from "./InputField";

interface Rules {
  required?: boolean;
  pattern?: any;
  minLength?: number;
  maxLength?: number;
  validate?: any;
  message?: string;
}
interface FieldProps extends Rules {
  label?: string;
  type?: string;
  name: string;
  methods: any; //todo typeing
  placeholder?: string;
  errorMessage?: string;
}

type ValidateType = "error" | "success" | "warning" | "validating";

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Field: React.FC<FieldProps> = ({
  label,
  type,
  name,
  methods,
  pattern,
  minLength,
  maxLength,
  validate,
  errorMessage,
  placeholder,
  required = false,
}) => {
  let Field = null;

  switch (type) {
    case "checkbox":
      //   Field = CheckboxField;
      break;
    default:
      Field = InputField;
  }

  const { errors, control } = methods;

  const getErrorConfig = () => {
    const { type } = _.get(errors, name) || "";

    if (errorMessage) {
      return {
        hasFeedback: true,
        validateStatus: "error" as ValidateType,
        help: errorMessage,
      };
    }

    switch (type) {
      case "required":
        return {
          hasFeedback: true,
          validateStatus: "error" as ValidateType,
          help: "필수 항목입니다.",
        };
      case "minLength":
        return {
          hasFeedback: true,
          validateStatus: "error" as ValidateType,
          help: "최소 몇자리",
        };
      case "maxLength":
        return {
          hasFeedback: true,
          validateStatus: "error" as ValidateType,
          help: "최대 몇자리",
        };
      case "pattern":
        return {
          hasFeedback: true,
          validateStatus: "error" as ValidateType,
          help: "형식이 일치하지 않습니다.",
        };
      default:
        break;
    }
  };

  const rules: Rules = { required: required };

  if (pattern) {
    rules.pattern = pattern;
  }
  if (minLength) {
    rules.minLength = minLength;
  }
  if (maxLength) {
    rules.maxLength = maxLength;
  }
  if (validate) {
    rules.validate = validate;
  }

  return (
    <Wrapper>
      {label && <Label required={required}>{label}</Label>}
      <Form.Item {...getErrorConfig()}>
        <Field name={name} control={control} rules={rules} />
      </Form.Item>

      {/* {error && <Error error={error}>{errorMessage}</Error>} */}
    </Wrapper>
  );
};

export default Field;
