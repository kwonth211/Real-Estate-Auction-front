import React, { useState } from "react";
import styled from "styled-components";
import { Form, Select, Checkbox, Button } from "antd";
import Field from "@/components/common/Fields";

const { Option } = Select;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const EmailButton = styled(Button)``;

const EamilWrapper = styled.div`
  display: flex;
  & > div:nth-child(1) {
    flex: auto;
    margin-right: 10px;
  }
  input,
  button {
    // **Todo global css
  }
`;

const SignupForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <EamilWrapper>
        <Field label="이메일" required={true} />
        <EmailButton>인증하기</EmailButton>
      </EamilWrapper>
      <Field label="닉네임" required={true} />

      <Field label="이름" required={true} />

      <Field label="비밀번호" type="password" required={true} />

      <Field label="비밀번호 확인" type="password" required={true} />

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Should accept agreement"),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <SubmitButton type="primary" htmlType="submit">
          회원가입
        </SubmitButton>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
