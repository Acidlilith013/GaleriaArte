import { Link, Outlet } from "react-router-dom"

function Navbar() {

    const linkList = [
        { to: "/home", label: "Home" },
        { to: "/artistas", label: "Artistas" },
        { to: "/exposicion", label: "Exposición" },
        { to: "/galeria", label: "Galería " },
        { to: "/servicios", label: "Servicios" },
    ]

    return (<div className="navbar">
        {linkList.map((link, index) => { return <Link to={link.to}>{link.label} {linkList.length !== index + 1 && " | "} </Link > })}
    </div>)
}

export default Navbar