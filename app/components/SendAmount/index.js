/**
*
* SendAmount
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';
import { FormattedMessage } from 'react-intl';

function SendAmount({ amount, onChangeAmount, locked }) {
  return (
    <span>
      <FormattedMessage id="amount" />{': '}
      <InputNumber
        value={amount}
        min={0}
        step={0.1}
        onChange={(value) => onChangeAmount((value))}
        disabled={locked}
      />
    </span>
  );
}

SendAmount.propTypes = {
  amount: PropTypes.number,
  onChangeAmount: PropTypes.func,
  locked: PropTypes.bool,
};

export default SendAmount;
