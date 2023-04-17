import { useState } from "react";
import Main from "../components/main";
import { Navigate, useNavigate } from "react-router-dom";

function HomePage() {
    const [places, setPlaces] = useState("");

    const navigate = useNavigate();

    const redirectPage = () => {
        console.log(places === "Chennai");
        places && navigate(`/details/${places.toLowerCase()}`);
    }
    return (
        <div>
            <h1>Home Page</h1>

            <select onChange={e => setPlaces(e.target.value)}>
                <option value="">-= Select Places =-</option>
                <option value="Chennai">Chennai</option>
                <option value="Pollachi">Pollachi</option>
                <option value="Chidambaram">Chidambaram</option>
                <option value="Thanjavur">Thanjavur</option>
            </select>

            <button onClick={redirectPage}>Go to Details Page</button>

            <Main id={1} />
        </div>
    )
}

export default HomePage;