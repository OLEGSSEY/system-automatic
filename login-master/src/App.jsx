import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import { useSelector } from 'react-redux'
import MainPage from './MainPage'
import Spet from './spet.jsx'
import About from './about.jsx'
import Contacts from './contacts.jsx'
import Bur from './bur.jsx'
import Bjd from './bjd.jsx'
import Istoria from './isroria.jsx'
import Fizika from './fizika.jsx'
import Liter from './liter.jsx'
import English from './english.jsx'
import Geogr from './geogr.jsx'
import Russn from './russn.jsx'
import Himia from './himia.jsx'
import Obsh from './obsh.jsx'
import Inform from './inform.jsx'
import Biology from './biology.jsx'
import Fizra from './fizra.jsx'
import Mathem from './mathem.jsx'
import Indiv from './indiv.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },



  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: '/spet',
    element: <Spet />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/bur',
    element: <Bur />
  },
  {
    path: '/bjd',
    element: <Bjd />
  },
  {
    path: '/istoria',
    element: <Istoria />
  },
  {
    path: '/fizika',
    element: <Fizika />
  },
  {
    path: '/liter',
    element: <Liter />
  },
  {
    path: '/english',
    element: <English />
  },
  {
    path: '/geogr',
    element: <Geogr />
  },
  {
    path: '/russn',
    element: <Russn />
  },
  {
    path: '/himia',
    element: <Himia />
  },
  {
    path: '/obsh',
    element: <Obsh />
  },
  {
    path: '/inform',
    element: <Inform />
  },
  {
    path: '/biology',
    element: <Biology />
  },
  {
    path: '/fizra',
    element: <Fizra />
  },
  {
    path: '/mathem',
    element: <Mathem />
  },
  {
    path: '/indiv',
    element: <Indiv />
  },


  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

const authRouterAdmin = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
  {
    path: 'admin',
    element: <>admin</>
  },
  {
    path: '/spet',
    element: <Spet />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/bur',
    element: <Bur />
  },
  {
    path: '/bjd',
    element: <Bjd />
  },
  {
    path: '/istoria',
    element: <Istoria />
  },
  {
    path: '/fizika',
    element: <Fizika />
  },
  {
    path: '/liter',
    element: <Liter />
  },
  {
    path: '/english',
    element: <English />
  },
  {
    path: '/geogr',
    element: <Geogr />
  },
  {
    path: '/russn',
    element: <Russn />
  },
  {
    path: '/himia',
    element: <Himia />
  },
  {
    path: '/obsh',
    element: <Obsh />
  },
  {
    path: '/inform',
    element: <Inform />
  },
  {
    path: '/biology',
    element: <Biology />
  },
  {
    path: '/fizra',
    element: <Fizra />
  },
  {
    path: '/mathem',
    element: <Mathem />
  },
  {
    path: '/indiv',
    element: <Indiv />
  },

  {
    path: '/*',
    element: <Navigate to="/"/>
  },
])

function App() {

  const token = useSelector((state) => state.auth.token)
  const role = useSelector((state) => state.auth.role)

  console.log(token);


  return (
    token ? role === "ADMIN" ? <RouterProvider router={authRouterAdmin} /> : <RouterProvider router={authRouter} /> :
    <RouterProvider router={router} />
  )
}

export default App
