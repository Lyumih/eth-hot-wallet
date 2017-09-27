/**
*
* AddressView
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import AddressList from 'components/AddressList';
import AddressListStatus from 'components/AddressListStatus';
import CheckBalancesStatus from 'components/CheckBalancesStatus';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AddressView(props) {
  const {
    isComfirmed, addressList, onChangeFrom, onCheckBalances, onGenerateAddress, networkReady, checkingBalanceDoneTime, checkingBalances, checkingBalancesError,
    addressListLoading, addressListError, addressListMsg,
   } = props;

  const addressListProps = { addressList, onChangeFrom, onCheckBalances };
  const checkBalancesStatusProps = { checkingBalanceDoneTime, checkingBalances, checkingBalancesError };
  const addressListStatusProps = { addressListLoading, addressListError, addressListMsg };

  if (isComfirmed) {
    return (
      <div>
        <AddressList {...addressListProps} />
        <button type="button" onClick={onCheckBalances} disabled={!networkReady}>
          Check balances
        </button>
        <br />
        <CheckBalancesStatus {...checkBalancesStatusProps} />

        <button type="button" onClick={onGenerateAddress}>
          Generate new address
        </button>
        <AddressListStatus {...addressListStatusProps} />
      </div>
    );
  }

  return (
    <div>
      <FormattedMessage {...messages.header} />
      Seed is not confirmed
    </div>
  );
}

AddressView.propTypes = {
  isComfirmed: PropTypes.bool,
  addressList: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.array,
  ]),
  onChangeFrom: PropTypes.func,
  onCheckBalances: PropTypes.func,
  onGenerateAddress: PropTypes.func,

  addressListLoading: PropTypes.bool,
  addressListError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
  addressListMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),


  networkReady: PropTypes.bool,
  checkingBalanceDoneTime: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checkingBalances: PropTypes.bool,
  checkingBalancesError: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
};

export default AddressView;
