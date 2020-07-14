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

function WelcomeText() {
  return (
    <div>
      <H1><FormattedMessage id="welcome" /> <FormattedMessage id="walletName" />.<br /><FormattedMessage id="toBegin" /><br /></H1>
    </div>
  );
}

WelcomeText.propTypes = {

};

export default WelcomeText;
