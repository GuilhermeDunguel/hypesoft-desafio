import { Button } from '../styles/components/DefaultButton'
import React, { ReactNode } from 'react'

export interface DefaultButtonProps {
  label: string
  secondary?: boolean
  icon?: ReactNode
  link?: string
}

export function DefaultButton({
  label,
  secondary,
  icon,
  link,
}: DefaultButtonProps) {
  return (
    <Button secondary={secondary} type="submit" aria-label="defaultButton">
      <span>{label.toUpperCase()}</span>
      {icon}
      {link ? <a href={link} /> : null}
    </Button>
  )
}
