import { Button } from '@/styles/components/DefaultButton'
import React, { ReactNode } from 'react'

interface DefaultButtonProps {
  label: string
  secondary?: boolean
  icon?: ReactNode
}

export default function DefaultButton({
  label,
  secondary,
  icon,
}: DefaultButtonProps) {
  return (
    <Button secondary={secondary}>
      <span>{label.toUpperCase()}</span>
      {icon}
    </Button>
  )
}
