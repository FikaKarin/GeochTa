import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
// import Popup from 'reactjs-popup';
import '../style/Navbar.css';
import '../style/InfoButton.css';

import InfoButton from './InfoButton.js';

import { HiHome } from 'react-icons/hi';
import { HiArrowLeft } from 'react-icons/hi';
// import { HiInformationCircle } from 'react-icons/hi';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-orange-300 flex justify-between py-2 px-4'>
      <button id='navbarBtn' onClick={() => navigate(-1)}>
        <HiArrowLeft />
      </button>
      <button id='home'>
      <Link to='/Welcome' >
        <HiHome fill="white" stroke='white' />
      </Link>
      </button>

      < InfoButton />
      {/* <Popup
        trigger={
          <button id='navbarInfo'>
            {' '}
            <HiInformationCircle />{' '}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className='modal'>
            <div className='content'>
              <button className='close' onClick={close}>
                &times;
              </button><br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              consequuntur doloribus eveniet. Iste laborum quos earum harum,
              dignissimos modi obcaecati? Magnam molestiae modi non recusandae
              odit sed veritatis mollitia dolorum! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Voluptas consequuntur doloribus
              eveniet. Iste laborum quos earum harum, dignissimos modi
              obcaecati? Magnam molestiae modi non recusandae odit sed veritatis
              mollitia dolorum! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Voluptas consequuntur doloribus eveniet. Iste
              laborum quos earum harum, dignissimos modi obcaecati? Magnam
              molestiae modi non recusandae odit sed veritatis mollitia dolorum!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              consequuntur doloribus eveniet. Iste laborum quos earum harum,
              dignissimos modi obcaecati? Magnam molestiae modi non recusandae
              odit sed veritatis mollitia dolorum!
              <br />
            </div>
          </div>
        )}
      </Popup> */}
    </div>
  );
};

export default Navbar;
