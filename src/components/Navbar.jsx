import { Link } from "react-router-dom";

function Navbar() {
    const linkList = [
        { to: "/home", label: "Home" },
        { to: "/artistas", label: "Artistas" },
        { to: "/exposicion", label: "Exposición" },
        { to: "/gallery", label: "Galería" },
        { to: "/servicios", label: "Servicios" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="brand">Los 4 Apóstoles</div>
                <div className="nav-links">
                    {linkList.map(l => (
                        <Link key={l.to} to={l.to} className="nav-link">
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
export default Navbar;

//     <div className="navbar">
//         {linkList.map((link, index) => { return <Link to={link.to}>{link.label} {linkList.length !== index + 1 && " | "} </Link > })}
//     </div>)
// }

// export default Navbar