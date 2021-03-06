/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ruLocaleData from 'react-intl/locale-data/ru';

import { DEFAULT_LOCALE } from './containers/LanguageProvider/constants'; // eslint-disable-line
import enTranslationMessages from './translations/en.json';
import ruTranslationMessages from './translations/ru.json';

export const appLocales = [
  'ru',
  'en',
];

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  ru: formatTranslationMessages('ru', ruTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};
