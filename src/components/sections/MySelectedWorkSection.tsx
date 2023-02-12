import {
  MySelectedWorkCardsWrapper,
  MySelectedWorkContainer,
} from '@/styles/sections/MySelectedWorkSection'
import React from 'react'
import { DefaultSectionHeading } from '../DefaultSectionHeading'
import { MySelectedWorkCard } from '../MySelectedWorkCard'

export function MySelectedWorkSection() {
  return (
    <MySelectedWorkContainer id="works">
      <DefaultSectionHeading label={'My Selected Work'} />
      <MySelectedWorkCardsWrapper>
        <MySelectedWorkCard
          imageUrl={'/projects-images/coffee-delivery.svg'}
          label={'Coffee Delivery'}
          projectUrl={'https://coffee-delivery-teal.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'/projects-images/my-portfolio.svg'}
          label={'My Portfolio'}
          projectUrl={'https://guilhermedunguel.com/'}
        />
        <MySelectedWorkCard
          imageUrl={'/projects-images/ignite-feed.svg'}
          label={'Ignite Feed'}
          projectUrl={'https://ignite-feed-mocha.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'/projects-images/todo-list.svg'}
          label={'To-do List'}
          projectUrl={'https://todolist-ignite-black.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'/projects-images/iceberg-endomarketing.svg'}
          label={'Iceberg Endomarketing'}
          projectUrl={'https://iceberg-endomarketing-xx9s.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'/projects-images/boxed-water.svg'}
          label={'Boxed Water - Landing Page'}
          projectUrl={'https://boxed-water.vercel.app/'}
        />
      </MySelectedWorkCardsWrapper>
    </MySelectedWorkContainer>
  )
}
