import {
  MySelectedWorkCardContainer,
  MySelectedWorkCardFooter,
  MySelectedWorkCardImageWrapper,
  ViewProjectButtonWrapper,
} from '@/styles/components/MySelectedWorkCard'
import React from 'react'

import Image from 'next/image'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

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
        <Image src={imageUrl} alt={''} fill />
      </MySelectedWorkCardImageWrapper>
      <MySelectedWorkCardFooter>
        <p>{label}</p>
        <ViewProjectButtonWrapper>
          <span>VIEW PROJECT</span>
          <HiOutlineArrowNarrowRight size={36} />
        </ViewProjectButtonWrapper>
      </MySelectedWorkCardFooter>
      <a href={projectUrl} target="blank" />
    </MySelectedWorkCardContainer>
  )
}
