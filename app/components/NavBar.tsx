import "./NavBar.css";

export default function Navbar() {
    return(
        <nav>
            <span>Seja bem-vindo!</span>
            <ul>
                <li><a href="/">inicio</a></li>
                <li><a href="/carro">carro</a></li>
                <li><a href="/concessionaria">concessionária</a></li>
            </ul>
        </nav>
    );
}