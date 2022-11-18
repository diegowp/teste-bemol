import { ReactNode } from 'react'

interface CardProps {
  image?: string
  title?: string
  children?: ReactNode
  actions?: ReactNode
}

export function Card({ children, image, title, actions }: CardProps) {
  return (
    <div className='card'>
      {image && (
        <div className='d-flex justify-content-center mt-3'>
          <img
            src={image}
            className='rounded-circle'
            width={150}
            referrerPolicy='no-referrer'
            alt={title}
          />
        </div>
      )}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <div className='card-text'>{children}</div>
        {actions}
      </div>
    </div>
  )
}
