import React, { Fragment } from 'react'
import Header from './header'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  return (
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  )
}

export default Layout
