import {
  TestimonialSelector,
  TestimonialsSectionContainer,
  TestimonialsWrapper,
  TestimonialTextSide,
  TestimonialWrapper,
} from '@/styles/sections/TestimonialsSection'
import React, { useState } from 'react'
import { DefaultSectionHeading } from '../DefaultSectionHeading'

import { DefaultTestimonalSelectorButton } from '../DefaultTestimonalSelectorButton'

import { AiFillStar } from 'react-icons/ai'

interface testimonialsProps {
  witness: {
    name: string
    profileImageUrl: string
    role: string
    company: string
  }

  testimonial: {
    stars: number
    text: string
  }
}

export function TestimonialsSection() {
  const [selectedWitness, setSelectedWitness] = useState('Lucas Mendonça')

  const testimonialsArray: testimonialsProps[] = [
    {
      witness: {
        name: 'Lucas Mendonça',
        role: 'CEO & Founder',
        profileImageUrl: 'https://i.imgur.com/4RkViLn.jpg',
        company: 'Editora Alamanda',
      },
      testimonial: {
        stars: 5.0,
        text: `Programador dedicado e aprende rápido! Possui ótimo conhecimento em Design e Front End`,
      },
    },
    {
      witness: {
        name: 'Tobias',
        role: 'Owner',
        profileImageUrl: 'https://i.imgur.com/jfoYy17.jpg',
        company: 'My Heart',
      },
      testimonial: {
        stars: 5,
        text: 'Meow.',
      },
    },
    {
      witness: {
        name: 'Noah Levin',
        role: 'Director of Design',
        profileImageUrl: 'https://i.imgur.com/rgJRVbS.jpg',
        company: 'Figma',
      },
      testimonial: {
        stars: 4.9,
        text: `If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level ofenthusiasm to the craft that's energizing for everyone who works with him.`,
      },
    },
    {
      witness: {
        name: 'Sundar Pichai',
        role: 'CEO & Founder',
        profileImageUrl: 'https://i.imgur.com/4nC12rG.jpg',
        company: 'Google',
      },
      testimonial: {
        stars: 4.8,
        text: `If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level ofenthusiasm to the craft that's energizing for everyone who works with him.`,
      },
    },
  ]

  return (
    <TestimonialsSectionContainer>
      <DefaultSectionHeading label={'Testimonial'} />
      <TestimonialsWrapper>
        <TestimonialSelector>
          {testimonialsArray.map((witness) => {
            return (
              <DefaultTestimonalSelectorButton
                key={witness.witness.name}
                witnessProfileImageUrl={witness.witness.profileImageUrl}
                witnessName={witness.witness.name}
                witnessRole={witness.witness.role}
                witnessCompany={witness.witness.company}
                witnessSelector={setSelectedWitness}
                witnessSelected={selectedWitness}
              />
            )
          })}
        </TestimonialSelector>
        <TestimonialTextSide>
          {testimonialsArray
            .filter((witness) => witness.witness.name === selectedWitness)
            .map((witness) => {
              return (
                <TestimonialWrapper key={witness.witness.name}>
                  <div>
                    <AiFillStar />
                    <h3>{witness.testimonial.stars} Star Rating</h3>
                  </div>
                  <p>“{witness.testimonial.text}”</p>
                </TestimonialWrapper>
              )
            })}
        </TestimonialTextSide>
      </TestimonialsWrapper>
    </TestimonialsSectionContainer>
  )
}
