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
        <Link to='/Welcome'>
          <HiHome fill='white' stroke='white' />
        </Link>
      </button>
      <InfoButton />
    </div>
  );
};

export default Navbar;
