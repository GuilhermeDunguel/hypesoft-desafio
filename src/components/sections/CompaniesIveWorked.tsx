import {
  CompaniesIveWorkedContainer,
  LogosContainer,
  LogosWrapper,
} from '@/styles/sections/CompaniesIveWorked'
import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import Image from 'next/image'

export function CompaniesIveWorked() {
  return (
    <CompaniesIveWorkedContainer>
      <p>
        I workd with <span>3+</span> Companies all over the World.
      </p>
      <LogosContainer>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/LuoLFXq.png'}
            alt={''}
            width={130}
            height={100}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/ASmkPbc.png'}
            alt={''}
            width={140}
            height={28}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/bE67Aba.png'}
            alt={''}
            width={140}
            height={52}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <HiOutlineArrowNarrowRight size={40} />
          <a href="https://guilhermedunguel.com/projects" about="blank" />
        </LogosWrapper>
      </LogosContainer>
    </CompaniesIveWorkedContainer>
  )
}
