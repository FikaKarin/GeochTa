import './App.css';
import './style/LandingPage.css';
import './style/LogIn.css';
import './style/Welcome.css';
import './style/OrderApproved.css';
import './style/Confirm.css';
import './style/Notification.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import Welcome from './components/Welcome';
import Select from './components/Select';
import Confirm from './components/Confirm';
import OrderApproved from './components/OrderApproved';
import Notification from './components/Notification';
import pic from './images/bkg.jpeg';

function App() {

  return (
    <div className='App flex'>
      <div className='absolute w-full h-full top-0 z-0 flex'><img src={pic} className='bkg object-cover' alt="bg"></img></div>
      <div className='z-10 h-full w-full'>
        <Router>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/LogIn' element={<LogIn />} />
            <Route exact path='/Welcome' element={<Welcome />} />
            <Route exact path='/Select' element={<Select />} />
            <Route exact path='/Confirm' element={<Confirm />} />
            <Route exact path='/OrderApproved' element={<OrderApproved />} />
            <Route exact path='/Notification' element={<Notification />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
