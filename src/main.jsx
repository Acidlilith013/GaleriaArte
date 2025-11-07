import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Servicios from './pages/Servicios.jsx'
import Galeria from './pages/Galeria.jsx'
import Exposicion from './pages/Exposicion.jsx'
import Artistas from './pages/Artistas.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Home',
        element: <Home/>
      },
      {
        path: '/artistas',
        element: <Artistas/>,
      },
      {
        path: '/exposicion',
        element: <Exposicion/>,
      },
      {
        path: '/galeria',
        element: <Galeria/>
      },
      {
        path: '/servicios',
        element: <Servicios/>,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)