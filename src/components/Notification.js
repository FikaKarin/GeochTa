import { useEffect } from 'react';

//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../style/Notification.css';

import Sweater from '../images/sweater.PNG';
import Nacka from '../images/Nacka.PNG';

//Notification component
//Redirect after 15 sec to /Welcome
const Notification = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    setTimeout(function() {
      window.location.href = "http://localhost:3000/Welcome"
    }, 15000)

  return (
    <div className='h-full flex flex-col'>
      <div
        data-aos='flip-left'
        data-aos-duration='1000'
        className='notification bg-white mx-5 py-14 px-8 shadow-lg py-4 rounded-lg mt-16'
      >
        <div className='font-bold text-2xl mt-10'>
          {' '}
          Dina paket har registrerats!
        </div>
        <br />
        <div>
          Det betyder att ditt gamla paket <br /> är kontrollerat och{' '}
          <span className='bg-green-100 p-1 font-bold'>Godkänt</span>,<br />{' '}
          samt att du hämtat ut ditt nya klädpaket.
        </div>
        <br />
        <div className='italic px-8'>
          Tack för att du är med och bidrar till en bättre miljö i vår kommun.
        </div>
        <p className='text-red-600 font-bold'><br />
        DEMO! <br />
          (Du omdirigeras snart till Startsidan)
        </p>
        <img className='sweater my-14' src={Sweater} alt='sweater' />
        <br />
        <br />
        <img className='nacka2 my-6' src={Nacka} alt='Nacka Kommun' />
      </div>
    </div>
  );
};

export default Notification;
