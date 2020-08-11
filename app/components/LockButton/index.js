/**
*
* LockButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popconfirm } from 'antd';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function LockButton(props) {
  const { onLockWallet, password, onUnlockWallet } = props;

  if (password) {
    return (
      <Popconfirm key="close_wallet" placement="bottom" title="Comfirm locking wallet" onConfirm={onLockWallet} okText="Confirm" cancelText="Abort">
        <Button icon="lock" type="default" ghost size="large" >
          <FormattedMessage id="lockWallet" />
        </Button>
      </Popconfirm>
    );
  }

  return (
    <Button icon="unlock" type="default" ghost size="large" onClick={onUnlockWallet}>
      <FormattedMessage id="unlockWallet" />
    </Button>
  );
}

LockButton.propTypes = {
  onLockWallet: PropTypes.func,
  password: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onUnlockWallet: PropTypes.func,
};

export default LockButton;
