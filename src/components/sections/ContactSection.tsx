import {
  ContactFormContainer,
  ContactInfosContainer,
  ContactInfoWrapper,
  ContactSectionContainer,
  SocialButtonsWrapper,
} from '@/styles/sections/ContactSection'
import React from 'react'
import DefaultButton from '../DefaultButton'

import { IoPaperPlaneOutline } from 'react-icons/io5'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'

export function ContactSection() {
  return (
    <ContactSectionContainer>
      <ContactFormContainer
        className="ContactFormContainer"
        action="https://formsubmit.co/guilhermedunguel@gmail.com"
        method="POST"
      >
        <h3>Let me know here.</h3>
        <div>
          <input name="name" type="text" placeholder="Full name" required />
          <input
            name="email"
            type="email"
            placeholder="Email adress"
            required
          />
        </div>
        <input name="subject" type="text" placeholder="Subjects" required />
        <textarea name="message" id="" placeholder="Message" required />
        <input type="hidden" name="_next" value={'http://localhost:3000/'} />
        <input
          type="hidden"
          name="_autoresponse"
          value={'Your message has been received!'}
        />
        <DefaultButton
          label="Send message"
          icon={<IoPaperPlaneOutline size={20} />}
        />
      </ContactFormContainer>
      <ContactInfosContainer className="ContactInfosContainer">
        <h3>Get In Touch</h3>
        <ContactInfoWrapper>
          <div className="ContactInfoDiv">
            <div>
              <FiMapPin size={24} />
            </div>
            <p>
              Agulhas Negras, 78, Campo Grande - Rio de Janeiro, RJ - 23042-500,
              Brazil.
            </p>
          </div>
          <div className="ContactInfoDiv">
            <div>
              <GoMail size={24} />
            </div>
            <p>guilhermedunguel@gmail.com</p>
          </div>
          <div className="ContactInfoDiv">
            <div>
              <FiPhone size={24} />
            </div>
            <p>+55 (21) 98794-3315</p>
          </div>
          <SocialButtonsWrapper>
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
          </SocialButtonsWrapper>
        </ContactInfoWrapper>
      </ContactInfosContainer>
    </ContactSectionContainer>
  )
}
