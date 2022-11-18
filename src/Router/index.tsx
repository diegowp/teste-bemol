import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { LazyRoutes } from '@/Router/LazyLoad'
import { PageLogin } from '@/Pages/Login'
import { PrivateRoutes } from '@/Router/PrivateRoutes'
import { Profile } from '@/Pages/Profile'
import { ProfileInfos } from '@/Pages/Profile/Infos'
import { ROUTES } from '@/Router/RoutesEnum'

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: (
      <LazyRoutes>
        <PageLogin />
      </LazyRoutes>
    ),
  },
  {
    path: ROUTES.HOME,
    element: <PrivateRoutes />,
    children: [
      {
        index: true,
        element: (
          <LazyRoutes>
            <App />
          </LazyRoutes>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <LazyRoutes>
            <Profile />
          </LazyRoutes>
        ),
      },
      {
        path: ROUTES.PROFILE_INFOS,
        element: (
          <LazyRoutes>
            <ProfileInfos />
          </LazyRoutes>
        ),
      },
    ],
  },
])
