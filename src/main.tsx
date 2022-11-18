import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/Router'
import { GlobalStyles } from '@/GlobalStyle'
import { AlertsProvider } from '@/Pages/Components/Shared/Toast/AlertsProvider.context'
import { AuthProvider } from '@/Context/Auth/Auth.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <AlertsProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AlertsProvider>
  </React.StrictMode>
)
