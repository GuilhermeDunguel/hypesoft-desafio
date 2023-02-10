import {
  MySelectedWorkCardsWrapper,
  MySelectedWorkContainer,
} from '@/styles/sections/MySelectedWorkSection'
import React from 'react'
import { DefaultSectionHeading } from '../DefaultSectionHeading'
import { MySelectedWorkCard } from '../MySelectedWorkCard'

export function MySelectedWorkSection() {
  return (
    <MySelectedWorkContainer>
      <DefaultSectionHeading label={'My Selected Work'} />
      <MySelectedWorkCardsWrapper>
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2F7dZqPPn.jpg&w=1920&q=100'
          }
          label={'Coffee Delivery Website'}
          projectUrl={'https://coffee-delivery-teal.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2FF9jgkS9.jpg&w=1920&q=100'
          }
          label={'My Portfolio'}
          projectUrl={'https://guilhermedunguel.com/'}
        />
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2F87FBS7K.jpg&w=1920&q=100'
          }
          label={'Ignite Feed'}
          projectUrl={'https://ignite-feed-mocha.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2FLg6iLHL.jpg&w=1920&q=100'
          }
          label={'To-do List'}
          projectUrl={'https://todolist-ignite-black.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2FXSCJi3O.jpg&w=1920&q=100'
          }
          label={'Iceberg Endomarketing'}
          projectUrl={'https://iceberg-endomarketing-xx9s.vercel.app/'}
        />
        <MySelectedWorkCard
          imageUrl={
            'https://www.guilhermedunguel.com/_next/image?url=https%3A%2F%2Fi.imgur.com%2FEQicTpd.jpg&w=1920&q=100'
          }
          label={'Boxed Water Landing Page'}
          projectUrl={'https://boxed-water.vercel.app/'}
        />
      </MySelectedWorkCardsWrapper>
    </MySelectedWorkContainer>
  )
}
