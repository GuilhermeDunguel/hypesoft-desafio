import {
  AboutExperienceAndProjectsWrapper,
  AboutImageWrapper,
  AboutSectionContainer,
  AboutTextsWrapper,
} from '@/styles/sections/AboutSection'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import React from 'react'
import Image from 'next/image'
import DefaultButton from '../DefaultButton'

export function AboutSection() {
  return (
    <AboutSectionContainer id="about">
      <AboutImageWrapper>
        <Image
          src={'https://i.imgur.com/FOFaDyr.jpg'}
          alt={
            'Uma imagem do computador de Guilherme, podendo ser visto um monitor com um projeto web sendo construído, ao lado esquerdo um microfone iluminado em vermelho e logo abaixo um teclado retro-iluminado com as cores RGB.'
          }
          fill
        />
      </AboutImageWrapper>
      <AboutTextsWrapper>
        <h2>
          Front-end and Mobile Developer, focused on JavaScript&apos;s
          Technologies.
        </h2>
        <p>
          Throughout my career, i&apos;ve worked with the latest technologies,
          aways focusing on understanding the customer needs and his
          satisfaction. My objective as a Developer is to be the greatest i can
          be, learning new technologies and exploring this universe that i love.
        </p>
        <AboutExperienceAndProjectsWrapper>
          <div>
            <span>1+</span>
            <p>Years of Experience</p>
          </div>
          <div>
            <span>28+</span>
            <p>Completed Projects</p>
          </div>
        </AboutExperienceAndProjectsWrapper>

        <DefaultButton
          label={'Say hi'}
          icon={<HiOutlineArrowNarrowRight size={30} />}
          link={'#contact'}
        />
      </AboutTextsWrapper>
    </AboutSectionContainer>
  )
}
