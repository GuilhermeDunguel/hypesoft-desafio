import {
  DefaultSectionHeading,
  DefaultSectionHeadingProps,
} from '../../components/DefaultSectionHeading'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Components/Heading',
  component: DefaultSectionHeading,
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
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Testimonial',
  },
} as Meta<DefaultSectionHeadingProps>

export const Default: StoryObj<DefaultSectionHeadingProps> = {}
