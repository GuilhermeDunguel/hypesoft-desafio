import { TranslationContext } from '@/context/TranslationContext'
import { Header } from '@/styles/components/MainHeader'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useContext } from 'react'

export function MainHeader() {
  const router = useRouter()
  const { locale } = router

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  const { about, services, works, contact } = useContext(TranslationContext)

  return (
    <Header id="mainHeader" data-testid="mainHeader">
      <nav>
        <a href="#about">{about}</a>
        <a href="#services">{services}</a>
        <a href="#works">{works}</a>
        <a href="#contact">{contact}</a>
        <select
          defaultValue={locale}
          onChange={handleChangeLanguage}
          data-testid="changeLanguageSelect"
        >
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </select>
      </nav>
    </Header>
  )
}
