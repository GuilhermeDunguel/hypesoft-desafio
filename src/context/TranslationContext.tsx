import { useRouter } from 'next/router'
import React, { ChangeEvent, createContext, ReactNode } from 'react'

import en from '../../public/locales/en'
import pt from '../../public/locales/pt'

interface TranslationProviderProps {
  children: ReactNode
}

export const TranslationContext = createContext({} as typeof en)

export function TranslationProvider({ children }: TranslationProviderProps) {
  const router = useRouter()
  const { locale } = router

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push('/', '/', { locale })
  }

  const translationObject = locale === 'en' ? en : pt

  return (
    <TranslationContext.Provider value={translationObject}>
      {children}
    </TranslationContext.Provider>
  )
}
