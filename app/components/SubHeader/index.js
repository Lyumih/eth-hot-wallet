/**
*
* SubHeader
*
*/

import React from 'react';
import { Button, Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LockButton from 'components/LockButton';
import { FormattedMessage } from 'react-intl';
// import IconButton from 'components/IconButton';
const Div = styled.div`
  margin-top: 45px;
  .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
  }

  .anticon-lock {
    color: white;
  }
  .anticon-unlock {
    color: white;
  }
`;

function SubHeader(props) {
  const {
    onGenerateWallet, onShowRestoreWallet, isComfirmed, onCloseWallet,
    onLockWallet, password, onUnlockWallet,
    /* optional laod / save buttons
     onSaveWallet, saveWalletLoading, saveWalletError,
     onLoadWallet, loadWalletLoading, loadWalletError, */
  } = props;

  const lockButtonProps = { onLockWallet, password, onUnlockWallet };

  const noWalletSubHeader = [
    <Button key="new_wallet" type="default" ghost size="large" onClick={onGenerateWallet}>
      <FormattedMessage id="newWallet" />
    </Button>,
    <Button key="restore_wallet" type="default" ghost size="large" onClick={onShowRestoreWallet}>
      <FormattedMessage id="restoreWallet" />
    </Button>,
    /* optional laod / save buttons
     <IconButton
      key="load"
      text="Load from storage"
      icon="upload"
      onClick={onLoadWallet}
      loading={loadWalletLoading}
      error={loadWalletError}
    />,*/
  ];

  const existingWalletSubHeader = [
    <LockButton key="lock_button" {...lockButtonProps} />,
    <Popconfirm
      key="close_wallet"
      placement="bottom"
      title={<FormattedMessage id="deleteAlertMessage" />}
      onConfirm={onCloseWallet}
      okText={<FormattedMessage id="confirm" />}
      okType={"ghost"}

      cancelText={<FormattedMessage id="abort" />}
    >
      <Button key="close_wallet" type="default" ghost icon="close-square-o" size="large">
        <FormattedMessage id="closeWallet" />
      </Button>
    </Popconfirm>,
    /* optional laod / save buttons
    <IconButton
      key="save"
      text="Save to disk"
      icon="download"
      onClick={onSaveWallet}
      loading={saveWalletLoading}
      error={saveWalletError}
      popconfirmMsg="Encrypted wallet will be saved to browser localStorage"
    />, */
  ];


  const subHeader = isComfirmed ? existingWalletSubHeader : noWalletSubHeader;

  return (
    <Div>
      {subHeader}
    </Div>
  );
}

SubHeader.propTypes = {
  onGenerateWallet: PropTypes.func,
  onShowRestoreWallet: PropTypes.func,
  isComfirmed: PropTypes.bool,
  onCloseWallet: PropTypes.func,
  onLockWallet: PropTypes.func,
  password: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onUnlockWallet: PropTypes.func,
  /* optional laod / save buttons
  onSaveWallet: PropTypes.func,
  saveWalletLoading: PropTypes.bool,
  saveWalletError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
   onLoadWallet: PropTypes.func,
  loadWalletLoading: PropTypes.bool,
  loadWalletError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]), */
};

export default SubHeader;
