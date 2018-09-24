import React from "react";
import styled from "styled-components";

import RepoItem from "./RepoItem";

const TableWrapper = styled.table`
  margin: 5% 5% 5% 5%;
  width: 100%;
  height: 70px;
  text-align: left;
  border-spacing: 5px 13px;
`;

const NameWrapper = styled.th`
  width: 25%;
`;

const ThWrapper = styled.th`
  width: 25%;
`;


const RepoList = ({ type, repositories }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <NameWrapper>Name</NameWrapper>
          <ThWrapper>Language</ThWrapper>
          <ThWrapper>Latest tag</ThWrapper>
          <ThWrapper />
        </tr>
      </thead>
      <tbody>
        {repositories.map(repository => (
          <RepoItem key={repository.id} type={type} {...repository} />
          
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default RepoList;
