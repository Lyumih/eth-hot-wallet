/**
*
* WelcomeText
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const H1 = styled.h1`
  font-size: 22px;
  color: rgba(0, 0, 0, 0.55);
  font-weight: 400;
`;

const H2 = styled.h2`
font-size: 16px;
margin-top:30px;
color: #b9b9b9;
font-weight: 400;
`;

function WelcomeText() {
  return (
    <div>
      <H1><FormattedMessage id="welcome" /> <FormattedMessage id="walletName" />.<br /><FormattedMessage id="toBegin" /><br /></H1>
      <H2>
        <FormattedMessage id="walletName" /> <FormattedMessage id="zeroClient" /> <FormattedMessage id="info1" /><br />
        <FormattedMessage id="info2" /> <br />
        <FormattedMessage id="info3" />
      </H2>
    </div>
  );
}

WelcomeText.propTypes = {

};

export default WelcomeText;
