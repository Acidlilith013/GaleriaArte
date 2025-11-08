
import { Link, Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {



  return (
    <div className="app-wrap">
      <Navbar />
      <main className="app-main">
        {<Outlet/>}
      </main>
    </div>

    // <>
    //   <Navbar/>
    //   <Outlet />
    // </>
  )
}

export default App
