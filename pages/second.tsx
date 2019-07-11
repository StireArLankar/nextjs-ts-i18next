import React, { Fragment } from 'react'
import { withTranslation, WithTranslation, nextI18next } from 'Src/i18n'
import Button from 'Components/second-page/button'

const Second = (props: WithTranslation) => {
  const onLanguageChange = (value: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (nextI18next.i18n.language !== value) {
      return nextI18next.i18n.changeLanguage(value)
    }
    return null
  }

  const isRusLanguage = nextI18next.i18n.language === 'ru'

  return (
    <Fragment>
      <div>
        <h1>{props.t('second')}</h1>
        <p>{props.t('language')}</p>
        <div className=''>
          <Button
            selected={isRusLanguage}
            onClick={onLanguageChange('ru')}
            title={props.t('language-ru')}
          />
          <Button
            selected={!isRusLanguage}
            onClick={onLanguageChange('en')}
            title={props.t('language-en')}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default withTranslation()(Second)
