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
    <AboutSectionContainer>
      <AboutImageWrapper>
        <Image src={'https://i.imgur.com/4j4nP9e.png'} alt={''} fill />
      </AboutImageWrapper>
      <AboutTextsWrapper>
        <h2>
          Software Engineer and Infrastructure specialist based in Brazil.
        </h2>
        <p>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </p>
        <AboutExperienceAndProjectsWrapper>
          <div>
            <span>17+</span>
            <p>Years of Experience</p>
          </div>
          <div>
            <span>325+</span>
            <p>Completed Projects</p>
          </div>
        </AboutExperienceAndProjectsWrapper>

        <DefaultButton
          label={'Say hi'}
          icon={<HiOutlineArrowNarrowRight size={36} />}
        />
      </AboutTextsWrapper>
    </AboutSectionContainer>
  )
}
