/**
*
* WelcomeTextTest
*
*/

import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

function WelcomeTextTest() {
  return (
    <div>
      <H1>Text Tested<br /></H1>
    </div>
  );
}

WelcomeTextTest.propTypes = {

};

export default WelcomeTextTest;
