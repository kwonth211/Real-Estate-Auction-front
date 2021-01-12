import React from "react";
import _ from "lodash";
import styled from "styled-components";

import Label from "./label";
import InputField from "./InputField";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

interface props {
  label?: string;
  type?: string;
  required?: boolean;
}
const Field: React.FC<props> = ({ label, type, required = false }) => {
  let Field = null;

  switch (type) {
    case "checkbox":
      //   Field = CheckboxField;
      break;
    default:
      Field = InputField;
  }

  //   const error = _.get(errors, name);

  //   const getErrorMessage = () => {
  //     // 에러메시지가 입력 된 경우 에러메시지로 반환
  //     if (errorMessage) {
  //       return errorMessage;
  //     }

  //     // 에러내에 에러메시지가 있을 경우 에러메시지로 반환
  //     if (error?.message) {
  //       return error.message;
  //     }

  //     // 에러 메시지 및 에러안에 메시지가 지정이 안되어있을 경우 기본 메시지 입력
  //     const errorType = error?.type;
  //     let defaultErrorMessage;

  //     switch (errorType) {
  //       case 'required': {
  //         defaultErrorMessage = '필수항목';
  //         break;
  //       }
  //     }

  //     return defaultErrorMessage;
  //   };

  return (
    <Wrapper>
      {label && <Label required={required}>{label}</Label>}
      <Field
        // name={name}
        required={required}
        // error={error}
        // errorMessage={getErrorMessage()}
        //   placeholder={placeholder}
        //   defaultValue={defaultValue}
        //   {...leftProps}
        //   {...getInputType(type)}
      />
    </Wrapper>
  );
};

export default Field;
