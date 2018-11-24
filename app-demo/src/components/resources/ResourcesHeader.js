import React from "react";
import styled from "styled-components";
import {
  HeaderText,
  SubHeaderText,
  VerticalContainer
} from "../../styles/commonStyles";

const ResourceHeaderText = styled(HeaderText)`
  color: #686868;
  margin-bottom: 3px;
`;

export default function ResourcesHeader() {
  return (
    <VerticalContainer>
      <ResourceHeaderText>My Resources</ResourceHeaderText>
      <SubHeaderText>Recources List</SubHeaderText>
    </VerticalContainer>
  );
}
