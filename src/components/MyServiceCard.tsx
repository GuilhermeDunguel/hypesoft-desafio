import {
  DiscussNowLink,
  MyServiceCardContainer,
  MyServiceCardFooter,
} from '@/styles/components/MyServiceCard'
import React, { ReactNode } from 'react'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

interface MyServiceCardProps {
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
          <HiOutlineArrowNarrowRight size={36} />
        </button>
        <DiscussNowLink href="#contacts" />
      </MyServiceCardFooter>
    </MyServiceCardContainer>
  )
}
