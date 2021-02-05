import React from 'react';

import styled from 'styled-components';

const StyledFullDetails = styled.span`
  align-self: flex-end;
  font-size: 15px;
  color: #252525;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function CardFullDetails() {
  return <StyledFullDetails>Full details</StyledFullDetails>;
}

export default CardFullDetails;
