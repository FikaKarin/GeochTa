//Logga
//Knapp, Logga in
import { Link } from "react-router-dom";
import "../style/LandingPage.css";

const LandingPage = () => {
    return ( <div className="landingpage">
        <Link to="/LogIn">Logga in</Link>

    </div> );
}
 
export default LandingPage;