import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #723fed;
  text-align: center;
  color: white;
  font-family: "verdana", Helvetica, sans-serif;
  font-size: 40px;
  padding: 40px;
`
const Header = () => {
  return (
    <Wrapper> My Github Favorites
    </Wrapper>
  );
};
export default Header;
