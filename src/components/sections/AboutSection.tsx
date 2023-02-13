import {
  AboutExperienceAndProjectsWrapper,
  AboutImageWrapper,
  AboutSectionContainer,
  AboutTextsWrapper,
} from '../../styles/components/sections/AboutSection'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import React, { useContext } from 'react'
import Image from 'next/image'
import { DefaultButton } from '../DefaultButton'
import { TranslationContext } from '@/context/TranslationContext'

export function AboutSection() {
  const {
    aboutTitle,
    aboutDescription,
    aboutYearsOfExperience,
    aboutCompletedProjects,
    sayHi,
  } = useContext(TranslationContext)

  return (
    <AboutSectionContainer id="about" data-testid="about">
      <AboutImageWrapper>
        <Image
          src={'https://i.imgur.com/FOFaDyr.jpg'}
          alt={
            'Uma imagem do computador de Guilherme, podendo ser visto um monitor com um projeto web sendo construído, ao lado esquerdo um microfone iluminado em vermelho e logo abaixo um teclado retro-iluminado com as cores RGB.'
          }
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </AboutImageWrapper>
      <AboutTextsWrapper>
        <h2>{aboutTitle}</h2>
        <p>{aboutDescription}</p>
        <AboutExperienceAndProjectsWrapper>
          <div>
            <span>1+</span>
            <p>{aboutYearsOfExperience}</p>
          </div>
          <div>
            <span>28+</span>
            <p>{aboutCompletedProjects}</p>
          </div>
        </AboutExperienceAndProjectsWrapper>

        <DefaultButton
          label={sayHi}
          icon={<HiOutlineArrowNarrowRight size={30} />}
          link={'#contact'}
        />
      </AboutTextsWrapper>
    </AboutSectionContainer>
  )
}
