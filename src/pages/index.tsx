import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Footer, Header, MainSectionsWrapper } from '../styles/index'
import { PresentationSection } from '@/components/sections/PresentationSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { MyServiceSection } from '@/components/sections/MyServiceSection'
import { MySelectedWorkSection } from '@/components/sections/MySelectedWorkSection'
import { CompaniesIveWorked } from '@/components/sections/CompaniesIveWorked'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { ContactSection } from '@/components/sections/ContactSection'

import Image from 'next/image'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypesoft | Desafio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <main className={inter.className}>
        <Header>
          <nav>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#works">WORKS</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </Header>
        <PresentationSection />
        <MainSectionsWrapper>
          <AboutSection />
          <MyServiceSection />
          <MySelectedWorkSection />
          <CompaniesIveWorked />
          <CallToActionSection />
          <TestimonialsSection />
          <ContactSection />
        </MainSectionsWrapper>
        <Footer>
          <Image
            title="HypesoftLogo-Footer"
            src={'/HypesoftLogo.svg'}
            alt={''}
            width={253}
            height={59}
          />
          <span>
            Made with <strong className="CreditsHeart">♥</strong> by Guilherme
            and <strong>Hypesoft</strong>
          </span>
        </Footer>
      </main>
    </>
  )
}
