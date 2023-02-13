import {
  TestimonialButton,
  TestimonialSelectorButtonWrapper,
} from '../styles/components/DefaultTestimonialSelectorButton'
import React, { useContext } from 'react'

import Image from 'next/image'
import { TranslationContext } from '@/context/TranslationContext'

export interface DefaultTestimonalSelectorButtonProps {
  witnessProfileImageUrl: string
  witnessName: string
  witnessRole: string
  witnessCompany: string
  witnessSelector: (witnessName: string) => void
  witnessSelected: string
}

export function DefaultTestimonalSelectorButton({
  witnessProfileImageUrl,
  witnessName,
  witnessRole,
  witnessCompany,
  witnessSelector,
  witnessSelected,
}: DefaultTestimonalSelectorButtonProps) {
  const { testimonialWitnessRole } = useContext(TranslationContext)
  return (
    <TestimonialSelectorButtonWrapper active={witnessName === witnessSelected}>
      <Image
        src={witnessProfileImageUrl}
        alt={'Imagem de uma das testemunhas do trabalho de Guilherme.'}
        width={52}
        height={52}
      />
      <div>
        <h3>{witnessName}</h3>
        <p>
          {witnessRole} {testimonialWitnessRole}{' '}
          <strong>{witnessCompany}</strong>
        </p>
      </div>
      <TestimonialButton onClick={() => witnessSelector(witnessName)} />
    </TestimonialSelectorButtonWrapper>
  )
}
