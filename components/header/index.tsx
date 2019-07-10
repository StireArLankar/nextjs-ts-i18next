import React from 'react'
import { withTranslation, WithTranslation } from 'Src/i18n'
import Link from 'Src/components/link'
import styles from './header.scss'

const Header = (props: WithTranslation) => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href='/' activeClassName={styles.active}>
            <a>{props.t('home')}</a>
          </Link>
        </li>
        <li>
          <Link href='/second' activeClassName={styles.active}>
            <a>{props.t('second')}</a>
          </Link>
        </li>
        <li>
          <Link href='/third' activeClassName={styles.active}>
            <a>{props.t('third')}</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withTranslation()(Header)
