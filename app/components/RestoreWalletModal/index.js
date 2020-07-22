/**
*
* RestoreWalletModal
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Button, Input, Icon, Tooltip } from 'antd';
import { FormattedMessage } from 'react-intl';

const Div = styled.div`
  margin-top: 12px;
`;

const Span = styled.span`
  color: red;
  font-size: 21px;
  padding-right: 12px;
  vertical-align: sub;
`;

const Description = styled.div`
  margin-bottom: 10px;
`;

function RestoreWalletModal(props, context) {
  const { isShowRestoreWallet, userSeed, userPassword, restoreWalletError, onChangeUserSeed, onChangeUserPassword, onRestoreWalletCancel, onRestoreWalletFromSeed } = props;
  // const suffix = userSeed ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
  const errorComponent =
    (<Span key="error">
      <Tooltip placement="bottom" title={restoreWalletError}>
        <Icon type="close-circle-o" style={{ color: 'red' }} />
      </Tooltip>
    </Span>);

  return (
    <Modal
      visible={isShowRestoreWallet}
      title={<FormattedMessage id="restoreWallet" />}
      onOk={onRestoreWalletCancel}
      onCancel={onRestoreWalletCancel}
      footer={[
        restoreWalletError ? errorComponent : null,
        <Button key="submit" ghost size="large" onClick={onRestoreWalletFromSeed} >
          <FormattedMessage id="restore" />
        </Button >,
      ]}
    >
      <Description> {"HDPathString m/44'/60'/0'/0"} <FormattedMessage id="addressGeneration" /></Description>
      <Input
        placeholder={context.intl.formatMessage({ id: 'seedPlaceholder' })}
        prefix={<Icon type="wallet" />}
        value={userSeed}
        onChange={onChangeUserSeed}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />
      <Div>
        <Input
          placeholder={context.intl.formatMessage({ id: 'passwordPlaceholder' })}
          prefix={<Icon type="key" />}
          value={userPassword}
          onChange={onChangeUserPassword}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </Div>
    </Modal>
  );
}

RestoreWalletModal.propTypes = {
  isShowRestoreWallet: PropTypes.bool,
  userSeed: PropTypes.string,
  userPassword: PropTypes.string,
  onChangeUserSeed: PropTypes.func,
  onChangeUserPassword: PropTypes.func,
  restoreWalletError: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
  onRestoreWalletCancel: PropTypes.func,
  onRestoreWalletFromSeed: PropTypes.func,
};

RestoreWalletModal.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default RestoreWalletModal;
