//Tillbakaknapp
//Hemknapp
//infoknapp
import React from 'react';
import Popup from 'reactjs-popup';
import '../style/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { HiArrowLeft } from 'react-icons/hi';
import { GrStatusInfo } from 'react-icons/gr';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='navbar'>
        <Link onClick={() => navigate(-1)}>
          <HiArrowLeft className='link-left' />
        </Link>
        <Link to='/Welcome'>
          <GrHomeRounded className='link-center' />
        </Link>
        <Popup
          trigger={<button className='infoButton'> <GrStatusInfo /> </button>}
          modal
          nested
        >
          {(close) => (
            <div className='modal'>
              <button className='close' onClick={close}>
                &times;
              </button>
              <div className='header'> INFO </div>
              <div className='content'>
                {' '}
                På den här sidan ska du:
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Navbar;
