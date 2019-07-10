import React, { Fragment } from 'react'
import cn from 'classnames'
import { withTranslation, WithTranslation } from 'Src/i18n'
import Link from 'Src/components/link'
import styles from './header.scss'

const Header = (props: WithTranslation) => {
  return (
    <Fragment>
      <ul className='nav nav-pills nav-fill col-xl-12 mb-2 mt-2 p-0'>
        <li className='nav-item'>
          <Link href='/' activeClassName='active'>
            <a className={cn('nav-link', styles.link)}>{props.t('home')}</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/second' activeClassName='active'>
            <a className={cn('nav-link', styles.link)}>{props.t('second')}</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/third' activeClassName='active'>
            <a className={cn('nav-link', styles.link)}>{props.t('third')}</a>
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default withTranslation()(Header)
