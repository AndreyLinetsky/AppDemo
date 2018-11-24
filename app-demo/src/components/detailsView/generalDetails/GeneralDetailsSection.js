import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SectionHeader from "../common/SectionHeader";
import { ReadOnlyTextArea, TextField } from "../../fields";

const SectionContainer = styled.div`
  width: 60%;
  border-right: 1px solid lightgray;
  padding: 0 12px 5px;
  min-height: 100%;
`;

const FieldsContainer = styled.div`
  margin-top: 6px;
`;

export default function GeneralDetailsSection({ resource }) {
  const sectionHeaderProps = {
    headerText: "GENERAL DETAILS",
    subHeaderText: "General Details Section"
  };
  const { name, description, resourceType, path } = resource;
  const nameProps = {
    value: name,
    label: "Name"
  };
  const descriptionProps = {
    value: description,
    label: "Description"
  };
  const resourceTypeProps = {
    value: resourceType,
    label: "Resource Type"
  };
  const pathProps = {
    value: path,
    label: "Path"
  };
  return (
    <SectionContainer>
      <SectionHeader {...sectionHeaderProps} />
      <FieldsContainer>
        <TextField {...nameProps} />
        <ReadOnlyTextArea {...descriptionProps} />
        <TextField {...resourceTypeProps} />
        <TextField {...pathProps} />
      </FieldsContainer>
    </SectionContainer>
  );
}

GeneralDetailsSection.propTypes = {
  resource: PropTypes.object
};
