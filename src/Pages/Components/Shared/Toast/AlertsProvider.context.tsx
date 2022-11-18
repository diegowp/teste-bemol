import { AppToast } from '@/Pages/Components/Shared/Toast'
import { ToastProps } from '@/Pages/Components/Shared/Toast/model'
import { createContext, ReactNode, useState } from 'react'

interface IAlertsProvider {
  state: ToastProps
  update: React.Dispatch<React.SetStateAction<ToastProps>>
}

export const AlertsContext = createContext<IAlertsProvider | null>(null)

export function AlertsProvider({ children }: { children: ReactNode }) {
  const [state, update] = useState<ToastProps>({
    show: false,
    type: 'success',
  })

  return (
    <AlertsContext.Provider value={{ state, update }}>
      <>
        {children}
        <AppToast />
      </>
    </AlertsContext.Provider>
  )
}
