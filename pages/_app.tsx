import App, { Container } from 'next/app'
import React from 'react'
import { appWithTranslation } from '../i18n'
import AppContext from 'Src/context/app-context'
import Layout from 'Src/components/layout'

class MyApp extends App {
  public static async getInitialProps (newProps: any) {
    let pageProps = {}

    if (newProps.Component.getInitialProps) {
      pageProps = await newProps.Component.getInitialProps(newProps.ctx)
    }

    return { pageProps }
  }

  public state = {
    name: 'Max'
  }

  public updateState = (newState: object) => {
    this.setState(newState)
  }

  public render = () => {
    const { Component, pageProps } = this.props
    const { updateState } = this

    return (
      <Container>
        <AppContext.Provider value={{ ...this.state, updateState }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContext.Provider>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)
