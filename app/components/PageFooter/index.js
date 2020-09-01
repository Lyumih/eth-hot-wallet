/**
*
* PageFooter
*
*/

import React from 'react';
import { github } from 'utils/constants';
import { Row, Col, Button } from 'antd';
import styled from 'styled-components';

import { StickyFooter } from './sticky';


const Footer = StickyFooter.extend`
  textAlign: center;
  background: #1105fd;
  color: #5a5a5a;
  padding: 10px;
  font-size: 14px;
  height: 100%;
`;

const Span = styled.span`
  color: #b9b9b9;
  margin-top:3px;
`;

function PageFooter() {
  return (
    <Footer >
      <Row>
        <Col>
        <form action="https://www.coinpayments.net/index.php" method="post">
          <input type="hidden" name="cmd" value="_pay"/>
          <input type="hidden" name="reset" value="1"/>
          <input type="hidden" name="merchant" value="86afdb1ad036c067549f4860191c8660"/>
          <input type="hidden" name="item_name" value="KRG Token test 1"/>
          <input type="hidden" name="currency" value="USD"/>
          <input type="hidden" name="amountf" value="1.00000000"/>
          <input type="hidden" name="quantity" value="1"/>
          <input type="hidden" name="allow_quantity" value="1"/>
          <input type="hidden" name="want_shipping" value="1"/>
          <input type="hidden" name="allow_extra" value="1"/>
          <input type="image" src="https://www.coinpayments.net/images/pub/buynow-wide-blue.png" alt="Купить используя CoinPayments.net"/>
        </form>

        </Col>
        {/* <Col sm={12} xs={24}>
          {'ETH Hot Wallet - '}
          <a href={github} target="_blank" rel="noopener">
            Ethereum Wallet with ERC20 support (GitHub)
          </a><br />
          Created using: eth-lightwallet, React.js, Ant design...
        </Col>

        <Span>
          <Col sm={12} xs={24}>
            <a href="https://monetaryCoin.org" target="_blank" rel="noopener">
              MonetaryCoin Homepage
            </a>
            <br />
            ETH: 0x97325941fafde5a182e6f7e5475a592ac615a3f2
          </Col>
        </Span> */}

      </Row>
    </Footer>
  );
}

PageFooter.propTypes = {

};

export default PageFooter;
