import React from 'react';

import styled from 'styled-components';
import Exclamation from '../Icons/Exclamation';
import FileLocked from '../Icons/FileLocked';

const StyledCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Detail = styled.div`
  border-left: 1px solid #252525;
  padding-left: 10px;
  margin-right: 10px;
`;

const DetailField = styled.div`
  color: #767676;
  margin-bottom: 8px;
`;

const DetailValue = styled.div`
  display: flex;
  color: #252525;
`;

const AdditionalDetail = styled.div`
  color: #252525;
  padding-top: 18px;
  padding-right: 20px;

  svg {
    margin-right: 8px;
  }
`;

const WarningIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: orange;
  color: #252525;
`;

function CardDetails({ withAdditional }) {
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
          <DetailValue>
            <WarningIcon>
              <Exclamation width={12} height={12} fill={'#252525'} />
            </WarningIcon>
            Pending authorisation
          </DetailValue>
        </Detail>
      </Wrapper>
      {withAdditional && (
        <AdditionalDetail>
          <FileLocked width={12} height={12} fill={'#252525'} />
          Private request. This request can only be seen by you.
        </AdditionalDetail>
      )}
    </StyledCardDetails>
  );
}

export default CardDetails;
