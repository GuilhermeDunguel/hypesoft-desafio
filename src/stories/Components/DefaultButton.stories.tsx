import {
  DefaultButton,
  DefaultButtonProps,
} from '../../components/DefaultButton'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import { Meta, StoryObj } from '@storybook/react'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export default {
  title: 'Components/Button',
  component: DefaultButton,
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
    label: 'Hire me',
    // icon: <HiOutlineArrowNarrowRight size={30} />,
  },
} as Meta<DefaultButtonProps>

export const Default: StoryObj<DefaultButtonProps> = {
  args: {
    label: 'Hire me',
    secondary: false,
  },
}

export const Secondary: StoryObj<DefaultButtonProps> = {
  args: {
    label: 'Hire me',
    secondary: true,
  },
}

export const DefaultWithIcon: StoryObj<DefaultButtonProps> = {
  args: {
    label: 'Hire me',
    icon: <HiOutlineArrowNarrowRight size={30} />,
    secondary: false,
  },
}

export const SecondaryWithIcon: StoryObj<DefaultButtonProps> = {
  args: {
    label: 'Hire me',
    icon: <HiOutlineArrowNarrowRight size={30} />,
    secondary: true,
  },
}
