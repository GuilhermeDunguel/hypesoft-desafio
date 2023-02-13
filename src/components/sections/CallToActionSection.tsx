import { TranslationContext } from '@/context/TranslationContext'
import React, { useContext } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { CallToActionSectionContainer } from '../../styles/components/sections/CallToActionSection'
import { DefaultButton } from '../DefaultButton'

export function CallToActionSection() {
  const { ctoTitle, ctoTogether, hireMe } = useContext(TranslationContext)

  return (
    <CallToActionSectionContainer id="callToAction" data-testid="callToAction">
      <p>
        {ctoTitle} <span>{ctoTogether}</span>.
      </p>
      <DefaultButton
        label={hireMe}
        icon={<HiOutlineArrowNarrowRight size={30} />}
        link={'#contact'}
      />
    </CallToActionSectionContainer>
  )
}
