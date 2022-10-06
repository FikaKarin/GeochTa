import './App.css';
import './style/LandingPage.css';
import './style/LogIn.css';
import './style/Welcome.css';
import './style/Select.css';
import './style/OrderApproved.css';
import './style/Confirm.css';
import './style/Notification.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import Select from "./components/Select";
import Confirm from "./components/Confirm";
import OrderApproved from "./components/OrderApproved";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path = "/" element = {<LandingPage />} />
      <Route exact path = "/LogIn" element = {<LogIn />} />
      <Route exact path = "/Welcome" element = {<Welcome />} />
      <Route exact path = "/Select" element = {<Select />} />
      <Route exact path = "/Confirm" element = {<Confirm />} />
      <Route exact path = "/OrderApproved" element = {<OrderApproved />} />
    </Routes>
   </Router>
    </div>
  );
}

export default App;
