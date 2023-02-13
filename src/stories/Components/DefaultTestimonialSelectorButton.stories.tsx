import {
  DefaultTestimonalSelectorButton,
  DefaultTestimonalSelectorButtonProps,
} from '../../components/DefaultTestimonalSelectorButton'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Components/Tesminonial Selector',
  component: DefaultTestimonalSelectorButton,
  decorators: [
    (Story) => {
      return (
        <div>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {Story()}
          </ThemeProvider>
        </div>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    witnessName: 'John Doe',
    witnessProfileImageUrl: 'https://i.imgur.com/vJhe3EO.jpg',
    witnessCompany: 'Google',
    witnessRole: 'Founder',
  },
} as Meta<DefaultTestimonalSelectorButtonProps>

export const Default: StoryObj<DefaultTestimonalSelectorButtonProps> = {}
