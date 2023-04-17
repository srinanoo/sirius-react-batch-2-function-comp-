import Header from "../components/header";
import Footer from "../components/footer";
import "./nav.css";
import { Outlet, Link, NavLink } from "react-router-dom";

function TemplatePage() {
    return (
        <div>
            
            <Header />

            <nav>
                {/* <a href="/"> Home </a>
                <a href="/details"> Details </a> */}

                {/* <Link to="/">Home</Link> | <Link to="/details">Details</Link> */}

                <NavLink to="/">Home</NavLink> | <NavLink to="/details">Details</NavLink>
            </nav>

            <Outlet />

            <Footer />

            
        </div>
    )
}

export default TemplatePage;