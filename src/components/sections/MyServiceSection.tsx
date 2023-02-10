import {
  MyServiceCardsWrapper,
  MyServiceSectionContainer,
} from '@/styles/sections/MyServiceSection'
import React from 'react'
import { MyServiceCard } from '../MyServiceCard'
import { FiLayers } from 'react-icons/fi'
import { AiOutlineMobile } from 'react-icons/ai'
import { BsCode } from 'react-icons/bs'
import { DefaultSectionHeading } from '../DefaultSectionHeading'

export function MyServiceSection() {
  return (
    <MyServiceSectionContainer>
      <DefaultSectionHeading label={'My Service'} />
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
