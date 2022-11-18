import { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { initFirebase } from '@/Config/firebase'
import { ROUTES } from '@/Router/RoutesEnum'
import { AuthContext } from '@/Context/Auth/Auth.context'

export function PrivateRoutes() {
  const authContext = useContext(AuthContext)

  const [isLogged, setIsLogged] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth(initFirebase)
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLogged(true)
        authContext!.update({
          uid: user.uid || '',
          name: user.displayName || '',
          email: user.email || '',
          photo: user.photoURL || '',
        })
      } else {
        setIsLogged(false)
        navigate(ROUTES.LOGIN)
      }
    })
  }, [])

  return isLogged ? <Outlet /> : null
}
