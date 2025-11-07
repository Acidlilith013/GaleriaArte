import { Link, Outlet } from "react-router-dom"

function Navbar() {

    return (
        <> <Link to='/home'>Home</Link> | <Link to='/artistas'>Artistas</Link> | <Link to='/exposicion'>Exposicion</Link> | <Link to='/galeria'>Galeria</Link>  |
            <Link to='/servicios'>Servicios</Link>
        </>
    )
}

export default Navbar