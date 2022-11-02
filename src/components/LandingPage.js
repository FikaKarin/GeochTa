import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom';
import '../style/LandingPage.css';

import Nacka from '../images/Nacka.PNG'

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="flip-down" data-aos-duration="1500" className='landingpage'>
      <p className='geoTa'>GE & TA</p>
      <br />
      <span className='landingSpan'>i samarbete med <img className='nacka' src={Nacka} alt="Nacka Kommun" /></span>
      <br /><br />
      <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2 mb-12 mt-36 '>
        <Link to='/LogIn'>LOGGA IN</Link>
      </button>
    </div>
  );
};

export default LandingPage;
