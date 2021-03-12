import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core/styles'
import theme from '../src/theme'
// import { GITHUB_BRANCH, GTM_SCRIPT } from '../src/consts'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const muiSheets = new MuiServerStyleSheets()
    const styledSesheets = new StyledServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledSesheets.collectStyles(muiSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {muiSheets.getStyleElement()}
            {styledSesheets.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledSesheets.seal()
    }
  }
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* {GITHUB_BRANCH === 'main' && (
            <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
          )} */}
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body>
          {/* {GITHUB_BRANCH === 'main' && (
            <noscript>
              <iframe
                src='https://www.googletagmanager.com/ns.html?id=GTM-NMVZZFB'
                height='0'
                width='0'
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
          )} */}
          <Main />
          <NextScript />
          <script
            async
            defer
            src='https://buttons.github.io/buttons.js'
          ></script>
        </body>
      </Html>
    )
  }
}
