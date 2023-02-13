import {
  DiscussNowLink,
  MyServiceCardContainer,
  MyServiceCardFooter,
} from '../styles/components/MyServiceCard'
import React, { ReactNode } from 'react'

import { BsArrowRight } from 'react-icons/bs'

export interface MyServiceCardProps {
  icon: ReactNode
  label: string
}

export function MyServiceCard({ icon, label }: MyServiceCardProps) {
  return (
    <MyServiceCardContainer>
      {icon}
      <MyServiceCardFooter>
        <p>{label}</p>
        <button>
          <span>DISCUSS NOW</span>
          <BsArrowRight size={30} />
        </button>
        <DiscussNowLink href="#contact" />
      </MyServiceCardFooter>
    </MyServiceCardContainer>
  )
}
