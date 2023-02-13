import React, { useContext } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { RiGlobalLine } from 'react-icons/ri'
import {
  FollowMeOnDiv,
  PresentationLeftSide,
  PresentationRightSide,
  PresentationSectionWrapper,
  PresentationTextAnButtons,
} from '../../styles/components/sections/PresentationSection'
import { DefaultButton } from '../DefaultButton'

import Image from 'next/image'
import { TranslationContext } from '@/context/TranslationContext'

export function PresentationSection() {
  const {
    presentationTitle,
    presentationMyHole,
    presentationDescription,
    hireMe,
    followMeOn,
    viewWork,
  } = useContext(TranslationContext)

  return (
    <PresentationSectionWrapper id="presentation" data-testid="presentation">
      <PresentationLeftSide>
        <PresentationTextAnButtons>
          <h1>
            {presentationTitle} <span>{presentationMyHole}</span>
          </h1>
          <p>{presentationDescription}</p>
          <div>
            <DefaultButton label={hireMe} link={'#contact'} />
            <DefaultButton secondary label={viewWork} link={'#works'} />
          </div>
        </PresentationTextAnButtons>
        <FollowMeOnDiv>
          <span>{followMeOn}</span>
          <div>
            <a
              href="https://www.linkedin.com/in/guilhermedunguel/"
              target="blank"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/GuilhermeDunguel" target="blank">
              <FaGithub size={20} />
            </a>
            <a href="mailto:guilhermedunguel@gmail.com" target="blank">
              <GoMail size={20} />
            </a>
            <a href="https://www.guilhermedunguel.com/" target="blank">
              <RiGlobalLine size={20} />
            </a>
          </div>
        </FollowMeOnDiv>
      </PresentationLeftSide>
      <PresentationRightSide>
        <Image
          src="https://i.imgur.com/F3PvsyW.jpg"
          alt="Uma foto de Guilherme, cor de pele branca, usando óculos rendondos de cor preta, barba por fazer, camiseta preta, sentado em uma cadeira preta com seu quarto ao fundo. o fundo é iluminado por uma luz roxa vindo da esquerda e uma luz amarela vindo da direita."
          width={870}
          height={970}
          quality={100}
          priority
        />
      </PresentationRightSide>
    </PresentationSectionWrapper>
  )
}
