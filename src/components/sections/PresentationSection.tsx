import React from 'react'
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from 'react-icons/fa'
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
            Hello, I&apos;m John, a <span>Software Engineer.</span>
          </h1>
          <p>
            Product Designer, UI/UX Designer, and developer based in Brazil.
            Over the past 17 years, as an art director and designer, I&apos;ve
            worked with big companies and up-and-coming startups.
          </p>
          <div>
            <DefaultButton label={'Hire me'} />
            <DefaultButton secondary label={'View work'} />
          </div>
        </PresentationTextAnButtons>
        <FollowMeOnDiv>
          <span>Follow me on</span>
          <div>
            <a href="">
              <FaDribbble size={20} />
            </a>
            <a href="">
              <FaBehance size={20} />
            </a>
            <a href="">
              <FaFacebookF size={20} />
            </a>
            <a href="">
              <FaTwitter size={20} />
            </a>
          </div>
        </FollowMeOnDiv>
      </PresentationLeftSide>
      <PresentationRightSide>
        <Image
          src="https://i.imgur.com/FGaRBYf.jpg"
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
