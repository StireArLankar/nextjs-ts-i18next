import i18n from 'i18next'
import NextI18Next from 'next-i18next'

export const nextI18next = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'ru',
  otherLanguages: ['ru', 'en'],
})

export const appWithTranslation = nextI18next.appWithTranslation
export const withTranslation = nextI18next.withTranslation
export type TFunction = i18n.TFunction
export type I18n = i18n.i18n
export type WithTranslation = i18n.WithT
