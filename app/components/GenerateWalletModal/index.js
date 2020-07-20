/**
*
* GenerateWalletModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Button, Alert } from 'antd';
import { FormattedMessage } from 'react-intl';

function GenerateWalletModal(props) {
  const {
    isShowGenerateWallet,
    generateWalletLoading,
    // generateWalletError,
    seed,
    password,

    onGenerateWallet,
    onGenerateWalletCancel,
    onGenerateKeystore,
    } = props;

  return (
    <Modal
      visible={isShowGenerateWallet}
      title={<FormattedMessage id="newWallet" />}
      onOk={onGenerateKeystore}
      onCancel={onGenerateWalletCancel}
      footer={[
        <Button key="submit"  ghost size="large" onClick={onGenerateKeystore}>
          <FormattedMessage id="create" />
        </Button>,
      ]}
    >
      <Alert
        message={<b><FormattedMessage id="seedInfo" /></b>}
        description={(
          <b>
            <FormattedMessage id="copySeed" />
            <br /> HDPathString: m/44&apos;/60&apos;/0&apos;/0.<br />
            <FormattedMessage id="recoverPassword" />
          </b>
        )}
        type="warning"
        showIcon
        closable
      />
      <br />
      <Alert
        message="Seed:"
        description={<b>{seed}</b>}
        type="info"
      />
      <br />
      <Alert
        message={<FormattedMessage id="passwordEncryption" />}
        description={<b>{password}</b>}
        type="info"
      />
      <br />
      <Button shape="circle" icon="reload" loading={generateWalletLoading} key="back" size="large" onClick={onGenerateWallet} />
    </Modal>
  );
}

GenerateWalletModal.propTypes = {
  isShowGenerateWallet: PropTypes.bool,
  generateWalletLoading: PropTypes.bool,
  /* generateWalletError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]), */
  seed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  password: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onGenerateWallet: PropTypes.func,
  onGenerateWalletCancel: PropTypes.func,
  onGenerateKeystore: PropTypes.func,
};

export default GenerateWalletModal;
