import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Chart Examples</h1>
            <nav>
                <NavLink to="/">Chart.Js</NavLink>
                <NavLink to="/mui">MUI</NavLink>
            </nav>
        </header>
    );
}

export default Header;
