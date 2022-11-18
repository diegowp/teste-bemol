import { createContext } from 'react'
import { IAuth } from '@/Context/Auth/model'
import { Loader } from '@/Pages/Components/Shared/Loader'
import { ReactNode, useState } from 'react'
import { signOut, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/Router/RoutesEnum'

interface IAuthProvider {
  state: IAuth
  update: React.Dispatch<React.SetStateAction<IAuth>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  logout: Function
}

export const AuthContext = createContext<IAuthProvider | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, update] = useState<IAuth>({
    uid: '',
    name: '',
    photo: '',
    email: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  function logout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        window.location.href = ROUTES.LOGIN
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <AuthContext.Provider value={{ state, update, setLoading, logout }}>
      {children}
      <Loader enabled={loading} />
    </AuthContext.Provider>
  )
}
