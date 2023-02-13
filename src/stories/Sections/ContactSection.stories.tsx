import { ContactSection } from '../../components/sections/ContactSection'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Sections/Contact Section',
  component: ContactSection,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {Story()}
        </ThemeProvider>
      )
    },
  ],
} as Meta

export const Default: StoryObj = {}
