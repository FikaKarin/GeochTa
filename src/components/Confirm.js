//Bekräftelse av villkor
//checkbox
//Ok-knapp
import { Link } from "react-router-dom";
import Navbar from './Navbar';

import "../style/Confirm.css";


const Confirm = () => {
    return ( <div>
        <Navbar />
        <Link to="/OrderApproved">Bekräfta</Link>
    </div> );
}
 
export default Confirm;