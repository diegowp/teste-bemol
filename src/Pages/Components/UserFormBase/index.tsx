import * as S from './style'
import Logo from '@/assets/images/marca-bemol.svg'
import { ReactNode } from 'react'

interface UserFormBaseProps {
  children: ReactNode
  title: string
  subtitle: string
}

export function UserFormBase({ children, title, subtitle }: UserFormBaseProps) {
  return (
    <S.Container className='container-fluid'>
      <S.LoginWrapper className='container'>
        <div className='input-group mb-4 d-flex justify-content-center'>
          <img src={Logo} alt='Bemol' width='100px' height='auto' />
        </div>
        <div className='input-group d-flex justify-content-center'>
          <h4> {title} </h4>
          <p> {subtitle} </p>
        </div>
        {children}
      </S.LoginWrapper>
    </S.Container>
  )
}
