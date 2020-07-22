/**
*
* LoadingIndicator
*
*/

import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
`;

const StyledSpin = styled(Spin)`
  .ant-spin-text {
    color: white;
  }
  .ant-spin-dot > i {
    background: white!important;
  }
`

function LoadingIndicator() {
  return (
    <Div>
      <StyledSpin size="large" tip="KGR Wallet" />
    </Div>
  );
}

LoadingIndicator.propTypes = {

};

export default LoadingIndicator;
