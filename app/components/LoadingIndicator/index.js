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
color: white;

`;

function LoadingIndicator() {
  return (
    <Div>
      <Spin size="large" tip="KGR wallet" />
    </Div>
  );
}

LoadingIndicator.propTypes = {

};

export default LoadingIndicator;
