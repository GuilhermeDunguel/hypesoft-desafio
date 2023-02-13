import {
  MyServiceCard,
  MyServiceCardProps,
} from '../../components/MyServiceCard'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { FiLayers } from 'react-icons/fi'

export default {
  title: 'Components/Service Card',
  component: MyServiceCard,
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
    icon: <FiLayers size={40} />,
    label: 'Front-End Development',
  },
} as Meta<MyServiceCardProps>

export const Default: StoryObj<MyServiceCardProps> = {}
