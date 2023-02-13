import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { CallToActionSectionContainer } from '../../styles/components/sections/CallToActionSection'
import { DefaultButton } from '../DefaultButton'

export function CallToActionSection() {
  return (
    <CallToActionSectionContainer>
      <p>
        Got a project in mind? Let&apos;s make something awesome{' '}
        <span>together</span>.
      </p>
      <DefaultButton
        label={'Hire me'}
        icon={<HiOutlineArrowNarrowRight size={30} />}
        link={'#contact'}
      />
    </CallToActionSectionContainer>
  )
}
