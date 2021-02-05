import React from 'react';

import styled from 'styled-components';
import Download from '../Icons/Download';
import Print from '../Icons/Print';

const StyledCardControls = styled.div`
  display: flex;
  padding-top: 15px;
`;

const ButtonsWrapper = styled.div`
  button {
    margin-left: 10px;
  }
`;

const Button = styled.button`
  height: 40px;
  border: none;
  padding: 0 20px;
  cursor: pointer;
`;

const ButtonSecondary = styled(Button)`
  & {
    color: #fff;
    background-color: #4d6474;

    &:hover {
      background-color: #3e505c;
    }

    &:active {
      background-color: #31404a;
    }
  }
`;
const ButtonTertiary = styled(Button)`
  & {
    color: #252525;
    border: 1px solid #252525;
    background-color: #ffffff;

    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.15);
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  height: 40px;
  padding-left: 20px;
  align-items: center;

  div {
    display: flex;
    height: 30px;
    align-items: center;
    cursor: pointer;
  }

  div:first-of-type {
    border-right: 1px solid #767676;
  }

  svg {
    padding: 0 20px;
  }
`;

const Icon = styled.div``;

function CardControls() {
  return (
    <StyledCardControls>
      <IconsWrapper>
        <Icon>
          <Download width={18} height={18} fill={'#252525'} />
        </Icon>
        <Icon>
          <Print width={18} height={18} fill={'#252525'} />
        </Icon>
      </IconsWrapper>
      <ButtonsWrapper>
        <ButtonTertiary>Reject</ButtonTertiary>
        <ButtonSecondary>Authorise</ButtonSecondary>
      </ButtonsWrapper>
    </StyledCardControls>
  );
}

export default CardControls;
