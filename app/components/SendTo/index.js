/**
*
* SendTo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';
// import styled from 'styled-components';

function SendTo({ to, onChangeTo, locked }, context) {
  return (
    <div>
      <Input
        style={{ width: '300px' }}
        placeholder={context.intl.formatMessage({ id: 'sendToAddressPlaceholder' })}
        prefix={<Icon type="contacts" />}
        value={to}
        onChange={onChangeTo}
        disabled={locked}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
      />
    </div>
  );
}

SendTo.propTypes = {
  to: PropTypes.string,
  onChangeTo: PropTypes.func,
  locked: PropTypes.bool,
};

SendTo.contextTypes = {
  intl: PropTypes.object.isRequired,
};

export default SendTo;
