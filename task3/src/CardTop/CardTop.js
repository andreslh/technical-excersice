import React from 'react';
import styled from 'styled-components';

import CardTitle from './CardTitle';
import CardControls from './CardControls';

const StyledCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CardTop() {
  return (
    <StyledCardTop>
      <CardTitle />
      <CardControls />
    </StyledCardTop>
  );
}

export default CardTop;
