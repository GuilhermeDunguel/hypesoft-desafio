import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { RiGlobalLine } from 'react-icons/ri'
import {
  FollowMeOnDiv,
  PresentationLeftSide,
  PresentationRightSide,
  PresentationSectionWrapper,
  PresentationTextAnButtons,
} from '../../styles/sections/PresentationSection'
import DefaultButton from '../DefaultButton'

import Image from 'next/image'

export function PresentationSection() {
  return (
    <PresentationSectionWrapper>
      <PresentationLeftSide>
        <PresentationTextAnButtons>
          <h1>
            Hello, I&apos;m &ldquo;Gui&rdquo;, a{' '}
            <span>Front-End Developer.</span>
          </h1>
          <p>
            UI/UX Designer, Front-End and Mobile Developer based in Brazil. 1
            year of freelancing experience, as an designer and Front-End
            Developer, I&apos;ve worked with up-and-coming startups.
          </p>
          <div>
            <DefaultButton label={'Hire me'} />
            <DefaultButton
              secondary
              label={'View work'}
              link={'https://guilhermedunguel.com'}
            />
          </div>
        </PresentationTextAnButtons>
        <FollowMeOnDiv>
          <span>Follow me on</span>
          <div>
            <a href="https://www.linkedin.com/in/guilhermedunguel/">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/GuilhermeDunguel">
              <FaGithub size={20} />
            </a>
            <a href="mailto:guilhermedunguel@gmail.com">
              <GoMail size={20} />
            </a>
            <a href="https://www.guilhermedunguel.com/">
              <RiGlobalLine size={20} />
            </a>
          </div>
        </FollowMeOnDiv>
      </PresentationLeftSide>
      <PresentationRightSide>
        <Image
          src="https://i.imgur.com/F3PvsyW.jpg"
          alt=""
          width={870}
          height={970}
          quality={100}
          priority
        />
      </PresentationRightSide>
    </PresentationSectionWrapper>
  )
}
