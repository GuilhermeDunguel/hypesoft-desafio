import { CompaniesIveWorked } from '../../components/sections/CompaniesIveWorked'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Sections/Companies Ive Worked',
  component: CompaniesIveWorked,
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
