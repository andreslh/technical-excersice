import React from 'react';

import styled from 'styled-components';

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 18px;
`;

const Detail = styled.div`
  margin: 0px 0px 11px 0px;
  border-left: 1px solid #252525;
  padding-left: 10px;
  margin-right: 10px;
`;

const DetailField = styled.div`
  color: #767676;
  margin-bottom: 8px;
`;

const DetailValue = styled.div`
  color: #252525;
`;

const AdditionalDetail = styled.div`
  color: #252525;
`;

function CardDetails() {
  return (
    <StyledCardDetails>
      <Wrapper>
        <Detail>
          <DetailField>Request reference</DetailField>
          <DetailValue>SET29383ABCH</DetailValue>
        </Detail>
        <Detail>
          <DetailField>Request category</DetailField>
          <DetailValue>Payment</DetailValue>
        </Detail>
        <Detail>
          <DetailField>Request status</DetailField>
          <DetailValue>Pending authorisation</DetailValue>
        </Detail>
      </Wrapper>
      <AdditionalDetail>
        Private request. This request can only be seen by you.
      </AdditionalDetail>
    </StyledCardDetails>
  );
}

export default CardDetails;
