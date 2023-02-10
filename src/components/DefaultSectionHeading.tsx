import { DefaultSectionHeadingWrapper } from '@/styles/components/DefaultSectionHeading'
import React from 'react'

interface DefaultSectionHeadingProps {
  label: string
}

export function DefaultSectionHeading({ label }: DefaultSectionHeadingProps) {
  return <DefaultSectionHeadingWrapper>{label}</DefaultSectionHeadingWrapper>
}
