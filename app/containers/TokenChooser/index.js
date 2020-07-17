/**
 *
 * TokenChooser
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';

// import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import TokenChooserList from 'components/TokenChooserList';
import { makeSelectNetworkName } from 'containers/Header/selectors';
import { makeSelectChosenTokens } from './selectors';
import { toggleToken, confirmNewTokenInfo } from './actions';
// import { makeSelectTokenChooser } from './selectors';
import reducer from './reducer';
// import saga from './saga';

import TokenSelection from './token-lists';

function TokenChooser(props) {
  const {
    isShowTokenChooser,
    onHideTokenChooser,

    chosenTokens,
    onToggleToken,
    onConfirmNewTokenInfo,
    networkName,

   } = props;

  const TokensForNetwork = TokenSelection[networkName];

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Modal
        visible={isShowTokenChooser}
        title={<span><FormattedMessage id="selectTokens" /> - {networkName}</span>}
        onOk={onHideTokenChooser}
        onCancel={onHideTokenChooser}
        footer={null}
      >
        <TokenChooserList
          tokenList={TokensForNetwork}
          chosenTokens={chosenTokens}
          onTokenToggle={onToggleToken}
        />
        <br />
        <Button type="primary" onClick={() => onConfirmNewTokenInfo(chosenTokens, networkName)} disabled={false} >
          <FormattedMessage id="update" />
        </Button>{' '}
        <Button  onClick={() => onConfirmNewTokenInfo()} disabled={false} >
          <FormattedMessage id="removeTokens" />
        </Button>
      </Modal>
    </div>
  );
}

TokenChooser.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  isShowTokenChooser: PropTypes.bool,
  onHideTokenChooser: PropTypes.func,

  chosenTokens: PropTypes.object,
  onToggleToken: PropTypes.func,
  onConfirmNewTokenInfo: PropTypes.func,

  networkName: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  chosenTokens: makeSelectChosenTokens(),

  networkName: makeSelectNetworkName(),

});

function mapDispatchToProps(dispatch) {
  return {
    onToggleToken: (symbol, toggle) => {
      dispatch(toggleToken(symbol, toggle));
    },
    onConfirmNewTokenInfo: (chosenTokens, networkName) => {
      dispatch(confirmNewTokenInfo(chosenTokens, networkName));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tokenchooser', reducer });
// const withSaga = injectSaga({ key: 'tokenchooser', saga });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(TokenChooser);
