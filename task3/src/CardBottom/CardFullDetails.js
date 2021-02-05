import React from 'react';

import styled from 'styled-components';
import ChevronDown from '../Icons/ChevronDown';

const StyledFullDetails = styled.div`
  align-self: flex-end;
  font-size: 12px;
  color: #252525;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function CardFullDetails() {
  return (
    <StyledFullDetails>
      <span>Full details</span>{' '}
      <ChevronDown width={12} height={12} fill={'#252525'} />{' '}
    </StyledFullDetails>
  );
}

export default CardFullDetails;
