import React from 'react';

import TxLink from './index'

export default {
  title: 'Components/TxLink',
};

export const base = () => <TxLink />
export const withExplorer = () => <TxLink explorer={'explorer'} tx={'tx'}/>
