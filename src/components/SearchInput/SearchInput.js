import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin : 5% 5% 5% 5%;
`;
const InputWrapper = styled.input`
  width: 60%;
  height: 34px;
  align: middle;
  font-size: 20px;
  padding: 0 10px;
  border-radius: 6px;
  outline: 0;
  border-top: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: #2c2d2e;
`;
const ButtonWrapper = styled.button`
  width: 30%;
  height: 38px;
  margin: 0 0 0 3%;
  background: #723fed;
  color: white;
  font-size: 20px;
  border-radius: 6px;
  outline: 0;

  &:hover {
    background: white;
    color: #723fed;
  }
`;

const SearchInput = ({ value, onChange, onSearch }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };
  const handleButtonPress = () => {
    onSearch(value);
  };

  return (
    <Wrapper>
      <InputWrapper
        placeholder="Type in here"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <ButtonWrapper onClick={handleButtonPress}>Search</ButtonWrapper>
    </Wrapper>
  );
};

export default SearchInput;
