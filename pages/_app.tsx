import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import { withRouter } from 'next/router'
import { appWithTranslation } from 'Src/i18n'
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
              <PageTransition timeout={300} classNames='page-transition'>
                <Component {...pageProps} key={this.props.router.route}/>
              </PageTransition>
              <style jsx={true} global={true}>{`
                .page-transition-enter {
                  opacity: 0;
                }
                .page-transition-enter-active {
                  opacity: 1;
                  transition: opacity 300ms;
                }
                .page-transition-exit {
                  opacity: 1;
                }
                .page-transition-exit-active {
                  opacity: 0;
                  transition: opacity 300ms;
                }
              `}</style>
            </main>
          </Layout>
        </AppContext.Provider>
      </Container>
    )
  }
}

export default withRouter(appWithTranslation(MyApp))
