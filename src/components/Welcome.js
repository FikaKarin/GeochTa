//välkomsttext
import { Link } from "react-router-dom";
import "../style/Welcome.css";
import Navbar from './Navbar';


const Welcome = () => {
    return ( <div>
        <Navbar />
        <p>VÄLKOMMEN ANNA</p>
        <Link to="/Select">Till VÄLJ PAKET</Link>

    </div> );
}
 
export default Welcome;