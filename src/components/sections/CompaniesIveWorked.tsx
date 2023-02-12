import {
  CompaniesIveWorkedContainer,
  LogosContainer,
  LogosWrapper,
} from '@/styles/sections/CompaniesIveWorked'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import Image from 'next/image'

export function CompaniesIveWorked() {
  return (
    <CompaniesIveWorkedContainer>
      <p>
        I worked with <span>3+</span> Companies all over the World.
      </p>
      <LogosContainer>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/LuoLFXq.png'}
            alt={
              'Logo da empresa Marcos Dunguel TI. Um circuito eletrônico em forma de uma árvore com seu tronco marrom e a sua copa verde e um sol atrás da copa à direita. Logo abaixo escrito "Marcos Dunguel, TI Verde"'
            }
            width={130}
            height={100}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/ASmkPbc.png'}
            alt={
              'Logo da empresa Editora Alamanda. Toda em rosa, à esquerda uma representação da flor alamanda que à sua direita está escrito "Alamanda"'
            }
            width={140}
            height={28}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <Image
            src={'https://i.imgur.com/bE67Aba.png'}
            alt={
              'Logo da empresa Grupo Star Info. Á esquerda 5 arcos arcos apontando para o centro, 4 em azul e 1 em amarelo, à direita está escrito "Grupo Star Info"'
            }
            width={140}
            height={52}
            quality={100}
          />
        </LogosWrapper>
        <LogosWrapper>
          <BsArrowRight size={32} />
          <a href="https://guilhermedunguel.com/" about="blank" />
        </LogosWrapper>
      </LogosContainer>
    </CompaniesIveWorkedContainer>
  )
}
