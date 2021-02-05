import React from 'react';

import styled from 'styled-components';

const StyledCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 17px;
  padding-bottom: 20px;
  color: #252525;
`;

const Title = styled.p`
  margin: 0px 0px 11px 0px;
  font-size: 20px;
`;

const Small = styled.small`
  font-size: 12px;
`;

function CardTitle() {
  return (
    <StyledCardTitle>
      <Title>Cancel / recall payment, GBP 1,000.00</Title>
      <Small>1234567890123456 (GB), KUIML Business Company</Small>
    </StyledCardTitle>
  );
}

export default CardTitle;
