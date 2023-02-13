import {
  MySelectedWorkCard,
  MySelectedWorkProps,
} from '../../components/MySelectedWorkCard'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Components/My Selected Work Card',
  component: MySelectedWorkCard,
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
    imageUrl: 'https://i.imgur.com/EaYIKyD.jpg',
    label: 'Coffee Delivery',
    projectUrl: 'https://coffee-delivery-teal.vercel.app/',
  },
} as Meta<MySelectedWorkProps>

export const Default: StoryObj<MySelectedWorkProps> = {}
