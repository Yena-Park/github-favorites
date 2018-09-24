import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 10px;
  margin: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "verdana", Helvetica, sans-serif;
`;

const ErrorMessage = ({ error }) => (
  <Wrapper>
    <small>{error.toString()}</small>
  </Wrapper>
);

export default ErrorMessage;
