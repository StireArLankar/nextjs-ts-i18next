const NextI18Next = require('next-i18next/dist/commonjs')

module.exports = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'ru',
  otherLanguages: ['ru', 'en'],
})
