import App, { Container } from 'next/app'
import React from 'react'
import { appWithTranslation } from '../i18n'
import AppContext from 'Src/context/app-context'
import Layout from 'Components/layout'
import Head from 'Components/head'
import 'Src/styles/index.scss'

class MyApp extends App {
  public static async getInitialProps (newProps: any) {
    let pageProps = {}

    if (newProps.Component.getInitialProps) {
      pageProps = await newProps.Component.getInitialProps(newProps.ctx)
    }

    return { pageProps }
  }

  public state = {
    name: 'Unknown'
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
            <Head />
            <main className='p-2 card'>
              <Component {...pageProps} />
            </main>
          </Layout>
        </AppContext.Provider>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)
