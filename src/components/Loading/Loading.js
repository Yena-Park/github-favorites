import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "verdana", Helvetica, sans-serif;
`;

const Loading = () => {
  return (
    <Wrapper>
      Loading
    </Wrapper>
  );
}

export default Loading;
