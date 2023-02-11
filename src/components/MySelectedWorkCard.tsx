import {
  MySelectedWorkCardContainer,
  MySelectedWorkCardFooter,
  MySelectedWorkCardImageWrapper,
  ViewProjectButtonWrapper,
} from '@/styles/components/MySelectedWorkCard'
import React from 'react'

import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

interface MySelectedWorkProps {
  imageUrl: string
  label: string
  projectUrl: string
}

export function MySelectedWorkCard({
  imageUrl,
  label,
  projectUrl,
}: MySelectedWorkProps) {
  return (
    <MySelectedWorkCardContainer>
      <MySelectedWorkCardImageWrapper>
        <Image src={imageUrl} alt={''} fill quality={100} />
      </MySelectedWorkCardImageWrapper>
      <MySelectedWorkCardFooter>
        <p>{label}</p>
        <ViewProjectButtonWrapper>
          <span>VIEW PROJECT</span>
          <BsArrowRight size={30} />
        </ViewProjectButtonWrapper>
      </MySelectedWorkCardFooter>
      <a href={projectUrl} target="blank" />
    </MySelectedWorkCardContainer>
  )
}
