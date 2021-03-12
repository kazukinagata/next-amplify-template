import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { ToastContainer } from 'react-toastify'
import dynamic from 'next/dynamic'
import 'nprogress/nprogress.css'
import 'react-toastify/dist/ReactToastify.css'
import '@aws-amplify/ui/dist/style.css'

const TopProgressBar = dynamic(
  () => {
    return import('../src/components/TopProgressBar')
  },
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Next x Amplify template</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <StylesProvider injectFirst>
        <MaterialUIThemeProvider theme={theme}>
          <StyledComponentsThemeProvider theme={theme}>
            <CssBaseline />
            <TopProgressBar />
            <ToastContainer
              position='top-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
            <ToastContainer />
          </StyledComponentsThemeProvider>
        </MaterialUIThemeProvider>
      </StylesProvider>
    </>
  )
}

export default MyApp
