import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  HeaderText,
  SubHeaderText,
  VerticalContainer,
  HorizontalContainer,
  iconCommonStyle
} from "../../../styles/commonStyles";
import { ReactComponent as HelpIcon } from "../../../assets/icons/help-12.svg";

const SectionHeaderContainer = styled(VerticalContainer)`
  margin-bottom: 5px;
`;

const SectionHeaderText = styled(HeaderText)`
  color: royalBlue;
  font-size: 11px;
  margin: auto 0;
`;

const HeaderTextContainer = styled(HorizontalContainer)`
  margin-bottom: 6px;
`;
const StyledHelpIcon = styled(HelpIcon)`
  ${iconCommonStyle};
  #help {
    fill: #676767;
  }
`;

export default function SectionHeader({ headerText, subHeaderText }) {
  return (
    <SectionHeaderContainer>
      <HeaderTextContainer>
        <SectionHeaderText>{headerText}</SectionHeaderText>
        <StyledHelpIcon />
      </HeaderTextContainer>
      <SubHeaderText>{subHeaderText}</SubHeaderText>
    </SectionHeaderContainer>
  );
}

SectionHeader.propTypes = {
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string
};
