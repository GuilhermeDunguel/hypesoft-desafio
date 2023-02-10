import { Button } from '@/styles/components/DefaultButton'
import React, { ReactNode } from 'react'

interface DefaultButtonProps {
  label: string
  secondary?: boolean
  icon?: ReactNode
  link?: string
}

export default function DefaultButton({
  label,
  secondary,
  icon,
  link,
}: DefaultButtonProps) {
  return (
    <Button secondary={secondary} type="submit">
      <span>{label.toUpperCase()}</span>
      {icon}
      {link ? <a href={link} target="blank" /> : null}
    </Button>
  )
}
