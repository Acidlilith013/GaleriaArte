
import { Link, Outlet } from "react-router-dom"
function App() {


  return (
    <>
     <Link to='/home'>Ir a Home</Link> | <Link to='/artistas'> Ir a artistas</Link> | <Link to= '/exposicion'>ir a exposicion</Link> | <Link to= '/galeria'>ir a galeria</Link>  | 
     <Link to= '/servicios'>ir a servicios</Link>
     <Outlet/>
     </>
  )
}

export default App
