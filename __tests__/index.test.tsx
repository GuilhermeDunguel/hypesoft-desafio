import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DefaultButton from '@/components/DefaultButton'
import { DefaultSectionHeading } from '@/components/DefaultSectionHeading'
import { DefaultTestimonalSelectorButton } from '@/components/DefaultTestimonalSelectorButton'
import { MySelectedWorkCard } from '@/components/MySelectedWorkCard'
import { MyServiceCard } from '@/components/MyServiceCard'
import { AiOutlineMobile } from 'react-icons/ai'
import { AboutSection } from '@/components/sections/AboutSection'
import { MyServiceSection } from '@/components/sections/MyServiceSection'
import { MySelectedWorkSection } from '@/components/sections/MySelectedWorkSection'
import { CompaniesIveWorked } from '@/components/sections/CompaniesIveWorked'
import { CallToActionSection } from '@/components/sections/CallToActionSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { PresentationSection } from '@/components/sections/PresentationSection'
import Home from '@/pages'

/* Essa foi a minha primeira vez fazendo testes, aprendi por documentação e tutoriais durante uma tarde. Provavelmente existem melhores práticas e pontos do código que precisam ser melhorados/corrigidos. Ficaria muito grato se eu pudesse ter um feedback pra aprender mais! ;) */

describe('Sections Rendering', () => {
  it('Should render Main Header', async () => {
    const { getByText } = render(<Home />)

    expect(getByText('ABOUT')).toBeInTheDocument()
    expect(getByText('SERVICES')).toBeInTheDocument()
    expect(getByText('WORKS')).toBeInTheDocument()
    expect(getByText('CONTACT')).toBeInTheDocument()
  })
  it('Should render Presentation Section', async () => {
    const { getByText } = await render(<PresentationSection />)
    expect(
      getByText(
        `UI/UX Designer, Front-End and Mobile Developer based in Brazil. 1 year of freelancing experience, as an designer and Front-End Developer, I've worked with up-and-coming startups.`
      )
    ).toBeInTheDocument()
  })
  it('Should render About Section', async () => {
    const { getByText } = await render(<AboutSection />)

    expect(
      getByText(
        `Front-end and Mobile Developer, focused on JavaScript's Technologies.`
      )
    ).toBeInTheDocument()
    expect(getByText(`SAY HI`)).toBeInTheDocument()
  })
  it('Should render My Service Section', async () => {
    const { getByText } = await render(<MyServiceSection />)

    expect(getByText(`UI/UX Design`)).toBeInTheDocument()
    expect(getByText(`Front-End Development`)).toBeInTheDocument()
    expect(getByText(`Mobile Development`)).toBeInTheDocument()
  })
  it('Should render My Selected Work Section', async () => {
    const { getByText } = await render(<MySelectedWorkSection />)

    expect(getByText(`Coffee Delivery`)).toBeInTheDocument()
    expect(getByText(`My Portfolio`)).toBeInTheDocument()
    expect(getByText(`Ignite Feed`)).toBeInTheDocument()
    expect(getByText(`To-do List`)).toBeInTheDocument()
    expect(getByText(`Iceberg Endomarketing`)).toBeInTheDocument()
    expect(getByText(`Boxed Water - Landing Page`)).toBeInTheDocument()
  })
  it('Should render Companies Ive Worked Section', async () => {
    const { getByAltText } = await render(<CompaniesIveWorked />)

    expect(
      getByAltText(
        'Logo da empresa Marcos Dunguel TI. Um circuito eletrônico em forma de uma árvore com seu tronco marrom e a sua copa verde e um sol atrás da copa à direita. Logo abaixo escrito "Marcos Dunguel, TI Verde"'
      )
    ).toBeInTheDocument()
    expect(
      getByAltText(
        'Logo da empresa Editora Alamanda. Toda em rosa, à esquerda uma representação da flor alamanda que à sua direita está escrito "Alamanda"'
      )
    ).toBeInTheDocument()
    expect(
      getByAltText(
        'Logo da empresa Grupo Star Info. Á esquerda 5 arcos arcos apontando para o centro, 4 em azul e 1 em amarelo, à direita está escrito "Grupo Star Info"'
      )
    ).toBeInTheDocument()
  })
  it('Should render Call to Action Section', async () => {
    const { getByText } = await render(<CallToActionSection />)

    expect(getByText('HIRE ME')).toBeInTheDocument()
  })
  it('Should render Testimonial Section', async () => {
    const { getByText } = await render(<TestimonialsSection />)

    expect(getByText('Testimonial')).toBeInTheDocument()
  })
  it('Should render Contact Section', async () => {
    const { getByText } = await render(<ContactSection />)

    expect(getByText('Let me know here.')).toBeInTheDocument()
    expect(getByText('Get In Touch')).toBeInTheDocument()
  })
  it('Should render Main Footer', async () => {
    const { getByTitle } = render(<Home />)

    expect(getByTitle('HypesoftLogo-Footer')).toBeInTheDocument()
  })
})

describe('Components Rendering', () => {
  it('Should render a button with label, link', async () => {
    const { getByText, getByRole } = await render(
      <DefaultButton label={'Hire me'} link={'#contact'} />
    )

    screen.debug()

    expect(getByText('HIRE ME')).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', '#contact')
  })

  it('Should render an section title', async () => {
    const { getByText } = await render(
      <DefaultSectionHeading label={'title'} />
    )

    expect(getByText('title')).toBeInTheDocument()
  })

  it('Should render an div with witness image, name, role, company, ', async () => {
    const { getByText, getByRole, getByLabelText } = await render(
      <DefaultTestimonalSelectorButton
        witnessProfileImageUrl={'https://i.imgur.com/4RkViLn.jpg'}
        witnessName={'witnessName'}
        witnessRole={'witnessRole'}
        witnessCompany={'witnessCompany'}
        witnessSelector={() => {}}
        witnessSelected={'witnessSelected'}
      />
    )

    expect(getByText('witnessName')).toBeInTheDocument()
    expect(getByText('witnessCompany')).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.imgur.com%2F4RkViLn.jpg&w=128&q=75'
    )
  })

  it('Should render an card with image, label and a link', async () => {
    const { getByText, getByRole } = await render(
      <MySelectedWorkCard
        imageUrl={'https://image.com'}
        label={'MyProject'}
        projectUrl={'https://projectURL.com'}
      />
    )

    expect(getByRole('img')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fimage.com&w=3840&q=100'
    )
    expect(getByText('MyProject')).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', 'https://projectURL.com')
  })

  it('Should render an card with label and an icon', async () => {
    const { getByText } = await render(
      <MyServiceCard icon={<AiOutlineMobile size={40} />} label={'MyService'} />
    )

    expect(getByText('MyService')).toBeInTheDocument()
  })
})
