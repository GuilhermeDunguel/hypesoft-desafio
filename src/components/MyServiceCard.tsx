import {
  DiscussNowLink,
  MyServiceCardContainer,
  MyServiceCardFooter,
} from '../styles/components/MyServiceCard'
import React, { ReactNode, useContext } from 'react'

import { BsArrowRight } from 'react-icons/bs'
import { TranslationContext } from '@/context/TranslationContext'

export interface MyServiceCardProps {
  icon: ReactNode
  label: string
}

export function MyServiceCard({ icon, label }: MyServiceCardProps) {
  const { ServiceCTO } = useContext(TranslationContext)

  return (
    <MyServiceCardContainer>
      {icon}
      <MyServiceCardFooter>
        <p>{label}</p>
        <button>
          <span>{ServiceCTO}</span>
          <BsArrowRight size={30} />
        </button>
        <DiscussNowLink href="#contact" />
      </MyServiceCardFooter>
    </MyServiceCardContainer>
  )
}
