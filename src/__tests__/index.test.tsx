import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DefaultButton } from '@/components/DefaultButton'
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
  it('Should render Presentation Section', async () => {
    const { getByTestId } = await render(<PresentationSection />)

    expect(getByTestId('presentation')).toBeInTheDocument()
  })
  it('Should render About Section', async () => {
    const { getByTestId } = await render(<AboutSection />)

    expect(getByTestId('about')).toBeInTheDocument()
  })
  it('Should render My Service Section', async () => {
    const { getByTestId } = await render(<MyServiceSection />)

    expect(getByTestId('services')).toBeInTheDocument()
  })
  it('Should render My Selected Work Section', async () => {
    const { getByTestId } = await render(<MySelectedWorkSection />)

    expect(getByTestId('works')).toBeInTheDocument()
  })
  it('Should render Companies Ive Worked Section', async () => {
    const { getByTestId } = await render(<CompaniesIveWorked />)

    expect(getByTestId('companiesIveWorked')).toBeInTheDocument()
  })
  it('Should render Call to Action Section', async () => {
    const { getByTestId } = await render(<CallToActionSection />)

    expect(getByTestId('callToAction')).toBeInTheDocument()
  })
  it('Should render Testimonial Section', async () => {
    const { getByTestId } = await render(<TestimonialsSection />)

    expect(getByTestId('testimonial')).toBeInTheDocument()
  })
  it('Should render Contact Section', async () => {
    const { getByTestId } = await render(<ContactSection />)

    expect(getByTestId('contact')).toBeInTheDocument()
  })
})

describe('Components Rendering', () => {
  it('Should render a button with label, link', async () => {
    const { getByText, getByRole } = await render(
      <DefaultButton label={'HIRE ME'} link={'#contact'} />
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
