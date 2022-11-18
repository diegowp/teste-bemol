import LogoGoogle from '@/assets/images/Google__G__Logo'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { initFirebase } from '@/Config/firebase'
import { useContext } from 'react'
import { UserFormBase } from '@/Pages/Components/UserFormBase'
import { AlertsContext } from '@/Pages/Components/Shared/Toast/AlertsProvider.context'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/Router/RoutesEnum'

export function PageLogin() {
  const toastData = useContext(AlertsContext)!

  const auth = getAuth(initFirebase)
  const provider = new GoogleAuthProvider()
  provider.addScope('openid')
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
  provider.addScope('https://www.googleapis.com/auth/userinfo.email')

  const navigate = useNavigate()

  function loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        toastData.update({
          show: true,
          type: 'success',
          msg: `Olá ${user.displayName}, seja bem vindo!`,
        })
        navigate(ROUTES.PROFILE_INFOS)
        localStorage.setItem('token', `${token}`)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        toastData.update({
          show: true,
          msg: errorMessage,
          type: 'error',
          title: `Erro na autenticação - ${errorCode}`,
        })
      })
  }

  return (
    <UserFormBase
      title='Seja Bem Vindo!'
      subtitle='Para continuar, faça o login abaixo'
    >
      <div className='input-group d-flex justify-content-center'>
        <span className='input-group-text'>
          <LogoGoogle />
        </span>
        <button
          type='button'
          className='btn btn-primary'
          onClick={loginWithGoogle}
        >
          Entrar com o Google
        </button>
      </div>
    </UserFormBase>
  )
}
