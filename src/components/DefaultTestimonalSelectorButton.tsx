import {
  TestimonialButton,
  TestimonialSelectorButtonWrapper,
} from '../styles/components/DefaultTestimonialSelectorButton'
import React from 'react'

import Image from 'next/image'

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
          {witnessRole} of <strong>{witnessCompany}</strong>
        </p>
      </div>
      <TestimonialButton onClick={() => witnessSelector(witnessName)} />
    </TestimonialSelectorButtonWrapper>
  )
}
