//Order confirmation
//Öppettider
//OK-knapp
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import "../style/OrderApproved.css";


const OrderApproved = () => {
    return ( <div>
        <Navbar />
        <p>ORDERBEKRÄFTELSE</p>
        <Link to="/Welcome">Tillbaka till Startsidan</Link>
    </div> );
}
 
export default OrderApproved;

