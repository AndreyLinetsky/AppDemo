import React from "react";
import styled from "styled-components";
import { HeaderText, SubHeaderText } from "../../styles/commonStyles";

const ResourceHeaderText = styled(HeaderText)`
  color: #686868;
  margin-bottom: 3px;
`;

export default function ResourcesHeader() {
  return (
    <>
      <ResourceHeaderText>My Resources</ResourceHeaderText>
      <SubHeaderText>Recources List</SubHeaderText>
    </>
  );
}
