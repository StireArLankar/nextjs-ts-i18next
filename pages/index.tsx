import React, { Fragment } from 'react'
import { withTranslation, WithTranslation } from 'Src/i18n'

import styles from 'Src/styles/main.scss'

const Home = (props: WithTranslation) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>{props.t('hello')}</div>
    </Fragment>
  )
}

export default withTranslation()(Home)
