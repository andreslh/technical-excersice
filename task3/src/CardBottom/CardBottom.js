import React from 'react';
import styled from 'styled-components';

import CardDetails from './CardDetails';
import CardFullDetails from './CardFullDetails';

const StyledCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
`;

function CardBottom() {
  return (
    <StyledCardBottom>
      <CardDetails />
      <CardFullDetails />
    </StyledCardBottom>
  );
}

export default CardBottom;
