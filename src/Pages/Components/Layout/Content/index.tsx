import { ReactNode } from 'react'
import * as S from './style'

interface LayoutContentProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export function LayoutContent({
  children,
  title,
  subtitle,
}: LayoutContentProps) {
  return (
    <S.MainContainer className='container-fluid'>
      <S.Container className='container'>
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </S.Container>
    </S.MainContainer>
  )
}
