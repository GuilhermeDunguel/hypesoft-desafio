import {
  MySelectedWorkCardContainer,
  MySelectedWorkCardFooter,
  MySelectedWorkCardImageWrapper,
  ViewProjectButtonWrapper,
} from '../styles/components/MySelectedWorkCard'
import React, { useContext } from 'react'

import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { TranslationContext } from '@/context/TranslationContext'

export interface MySelectedWorkProps {
  imageUrl: string
  label: string
  projectUrl: string
}

export function MySelectedWorkCard({
  imageUrl,
  label,
  projectUrl,
}: MySelectedWorkProps) {
  const { WorksCTO } = useContext(TranslationContext)

  return (
    <MySelectedWorkCardContainer>
      <MySelectedWorkCardImageWrapper>
        <Image
          src={imageUrl}
          alt={'Imagem de um dos projetos de Guilherme.'}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </MySelectedWorkCardImageWrapper>
      <MySelectedWorkCardFooter>
        <p>{label}</p>
        <ViewProjectButtonWrapper>
          <span>{WorksCTO}</span>
          <BsArrowRight size={30} />
        </ViewProjectButtonWrapper>
      </MySelectedWorkCardFooter>
      <a href={projectUrl} target="blank" />
    </MySelectedWorkCardContainer>
  )
}
