import {
  MyServiceCardsWrapper,
  MyServiceSectionContainer,
} from '@/styles/sections/MyServiceSection'
import React from 'react'
import { MyServiceCard } from '../MyServiceCard'
import { FiLayers } from 'react-icons/fi'
import { RxCube } from 'react-icons/rx'
import { TbLayoutColumns } from 'react-icons/tb'
import { BsCode } from 'react-icons/bs'

export function MyServiceSection() {
  return (
    <MyServiceSectionContainer>
      <h2>My Service</h2>
      <MyServiceCardsWrapper>
        <MyServiceCard
          icon={<FiLayers size={40} />}
          label="UI/UX
Design"
        />
        <MyServiceCard
          icon={<RxCube size={40} />}
          label="Product
Design"
        />
        <MyServiceCard
          icon={<TbLayoutColumns size={40} />}
          label="Branding Design"
        />
        <MyServiceCard
          icon={<BsCode size={40} />}
          label="Front End Development"
        />
      </MyServiceCardsWrapper>
    </MyServiceSectionContainer>
  )
}
