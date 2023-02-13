import {
  MySelectedWorkCardsWrapper,
  MySelectedWorkContainer,
} from '../../styles/components/sections/MySelectedWorkSection'
import React, { useContext } from 'react'
import { DefaultSectionHeading } from '../DefaultSectionHeading'
import { MySelectedWorkCard } from '../MySelectedWorkCard'
import { TranslationContext } from '@/context/TranslationContext'

export function MySelectedWorkSection() {
  const { WorksHeading } = useContext(TranslationContext)

  return (
    <MySelectedWorkContainer id="works" data-testid="works">
      <DefaultSectionHeading label={WorksHeading} />
      <MySelectedWorkCardsWrapper>
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/hLG0SEy.jpg'}
          label={'Coffee Delivery'}
          projectUrl={'https://coffee-delivery-teal.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/B7ylowo.jpg'}
          label={'My Portfolio'}
          projectUrl={'https://www.guilhermedunguel.com/'}
        />
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/xrh6x5o.jpg'}
          label={'Ignite Feed'}
          projectUrl={'https://ignite-feed-mocha.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/NjOr8gT.jpg'}
          label={'To-do List'}
          projectUrl={'https://todolist-ignite-black.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/6vEmtuf.jpg'}
          label={'Iceberg Endomarketing'}
          projectUrl={'https://iceberg-endomarketing-xx9s.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={'https://i.imgur.com/fPSkxhW.jpg'}
          label={'Boxed Water - Landing Page'}
          projectUrl={'https://boxed-water.vercel.app/'}
        />
      </MySelectedWorkCardsWrapper>
    </MySelectedWorkContainer>
  )
}
