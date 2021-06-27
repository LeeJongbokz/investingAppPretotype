import * as React from "react";
import styled from "styled-components";

const FormBox = styled.form`
  width: 100%;
  margin-bottom: 100px;
`;

const Input = styled.input`
  width: 70%;
  height: 14px;
  padding: 10px;
  border: none;
  background: #f8f9fa;
  margin-right: 8px;
`;

const Button = styled.button`
  width: 20%;
  padding: 10px;
  border: none;
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
`;

interface formProps {}

const Form: React.FC<formProps> = ({}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <FormBox onSubmit={(e) => onSubmit(e)}>
      <Input type="email" placeholder="이메일을 입력해주세요." />
      <Button type="submit">Submit</Button>
    </FormBox>
  );
};

export default Form;
