import { Suspense } from 'react'

interface LazyRoutesProps {
  children: React.ReactNode
}

export function LazyRoutes({ children }: LazyRoutesProps) {
  return <Suspense>{children}</Suspense>
}
