import { addDecorator, configure } from '@storybook/react';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

// Load the locale data for all your defined locales
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/de';
import {translationMessages} from "../app/i18n";

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

// Provide your messages
const messages = translationMessages

// Provide your formats (optional)
const formats = {
  'en': {
    'date': {
      'year-only': {
        'year': '2-digit',
      },
    },
  },
  'ru': {
    'date': {
      'year-only': {
        'year': 'numeric',
      },
    },
  },
};

const getMessages = (locale) => messages[locale];
const getFormats = (locale) => formats[locale];

// Set intl configuration
setIntlConfig({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  getMessages,
  getFormats,
});

// Register decorator
addDecorator(withIntl);


// Run storybook
configure(() => require('./main'), module);
