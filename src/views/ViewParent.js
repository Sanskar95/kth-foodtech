import React from 'react';
import styled from 'styled-components';

const StyledView = styled.section`
  height: 100%;
`;

const ViewParent = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};

export default ViewParent;
