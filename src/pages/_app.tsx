import { TranslationProvider } from '@/context/TranslationContext'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </TranslationProvider>
  )
}
