import {
  MyServiceCardsWrapper,
  MyServiceSectionContainer,
} from '../../styles/components/sections/MyServiceSection'
import React, { useContext } from 'react'
import { MyServiceCard } from '../MyServiceCard'
import { FiLayers } from 'react-icons/fi'
import { AiOutlineMobile } from 'react-icons/ai'
import { BsCode } from 'react-icons/bs'
import { DefaultSectionHeading } from '../DefaultSectionHeading'
import { TranslationContext } from '@/context/TranslationContext'

export function MyServiceSection() {
  const { ServiceHeading } = useContext(TranslationContext)

  return (
    <MyServiceSectionContainer id="services" data-testid="services">
      <DefaultSectionHeading label={ServiceHeading} />
      <MyServiceCardsWrapper>
        <MyServiceCard icon={<FiLayers size={40} />} label="UI/UX Design" />
        <MyServiceCard
          icon={<BsCode size={40} />}
          label="Front-End Development"
        />
        <MyServiceCard
          icon={<AiOutlineMobile size={40} />}
          label="Mobile Development"
        />
      </MyServiceCardsWrapper>
    </MyServiceSectionContainer>
  )
}
