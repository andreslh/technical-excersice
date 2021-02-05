import React from 'react';
import styled from 'styled-components';

import CardTop from './CardTop/CardTop';
import CardBottom from './CardBottom/CardBottom';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
  margin: 10px 20px;
  border-top: 1px solid #252525;
  border-bottom: 1px solid #252525;
  background-color: #fff;
  font-family: Arial;
`;

function Card() {
  return (
    <StyledCard>
      <CardTop />
      <CardBottom />
    </StyledCard>
  );
}

export default Card;
