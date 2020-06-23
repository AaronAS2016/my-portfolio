import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { themes } from 'src/styles/'



export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={themes}>
          <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}