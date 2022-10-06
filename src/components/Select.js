//3 paketval
//dropdown med klädlista
//väljknapp
import "../style/Select.css";
import { Link } from "react-router-dom";
import Navbar from './Navbar';


const Select = () => {
    return ( <div>
        <Navbar />
        <Link to="/Confirm">Bekräfta order</Link>
    </div> );
}
 
export default Select;