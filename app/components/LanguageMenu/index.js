/**
*
* LanguageMenu
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Menu, Button, Dropdown, Icon } from 'antd';
const MenuItem = Menu.Item;

const languages = {
  en: 'English',
  ru: 'Russian',
};

const StyledButton = styled(Button)`
  margin: 15px;
`;

const StyledMenuItem = styled(MenuItem)`
  line-height: 40px;
`;

function LanguageMenu(props) {
  const { locale, changeLanguage } = props;

  const options = Object.keys(languages).map((lang) =>
    <StyledMenuItem key={lang}><a tabIndex="0" role="button" onClick={() => changeLanguage(lang)}>{languages[lang]}</a></StyledMenuItem>
  );

  const menu = (
    <Menu
      forceSubMenuRender
      defaultSelectedKeys={[locale]}
      selectedKeys={[locale]}
    >
      {options}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <StyledButton size="large" icon="flag">
        {languages[locale]}<Icon type="down" />
      </StyledButton>
    </Dropdown>
  );
}

LanguageMenu.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  locale: PropTypes.string,
};

export default LanguageMenu;
