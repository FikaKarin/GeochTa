import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';

import '../style/Welcome.css';
import '../style/Button.css';

import singlePackage from '../images/singlePackage.PNG';

import { RiNumber1 } from 'react-icons/ri';
import { FaBaby } from 'react-icons/fa';

const Welcome = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const [contact, setContact] = useState(null);

  const getContact = async () => {
    const response = await fetch('http://localhost:3001/contact').then(
      (response) => response.json()
    );
    // update the state
    setContact(response);
  };

  useEffect(() => {
    getContact();
  }, []);

  const [parent, setParent] = useState(null);

  const getParent = async () => {
    const response = await fetch('http://localhost:3001/parents/0').then(
      (response) => response.json()
    );
    // update the state
    setParent(response);
  };

  useEffect(() => {
    getParent();
  }, []);

  useEffect(() => {
    if (parent && parent.children[0].package.size === '') {
      document.getElementById('packageStatus').innerHTML =
        'inget klädpaket ännu';
    }
  }, [parent]);

  return (
    <div data-aos="zoom-in" data-aos-duration="600" className='flex flex-col bg-white bg-opacity-80 h-[74rem]'>
      <Navbar />
      <div className='mt-8 space-y-8'>
        <div className='text-black text-4xl'>
          <div className='pageNumber1'>
            {' '}
            <RiNumber1 />
          </div>
          <br />
          {parent && (
            <h1>
              {' '}
              <span className='font-bold'> Välkommen </span> <br />{' '}
              <span className='text-2xl text-green-600'>{parent.name}</span>
            </h1>
          )}
        </div>
        <div className='bg-white py-16 mx-8 shadow-lg pt-0 rounded-lg'>
          {parent && (
            <div className='space-y-10 text-xl pt-6'>
              <div>
                <FaBaby className='baby' />
                Du har{' '}
                <span className='font-bold'>{parent.children.length}</span> barn
                registrerat <br /> som är{' '}
                <span className='font-bold'>{parent.children[0].age}</span>{' '}
                gammalt.
                <p>
                  <br /><br />
                  Du har just nu klädpaket: <br />{' '}
                  <span id='packageStatus' className='font-bold text-2xl'>
                    {parent.children[0].package.size}
                    <img id="package" src={singlePackage} alt='Logo' />
                  </span>
                </p>
              </div>
              <div>
                <p>Din registrerade adress är:</p>
                <p className='text-black text-1xl font-bold'>{parent.adress}</p>
              </div>
              <p className='text-orange-300 underline'>
                <Popup
                  trigger={
                    <button className='text-orange-300 underline'>
                      {' '}
                      Stämmer inte dina uppgifter?{' '}
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
                        </button>
                        <span className='font-bold'>
                          Om dina uppgifter inte stämmer
                        </span>{' '}
                        måste du kontakta dina kontaktperson: <br />
                        <br />
                        <span className='text-black text-2xl font-bold'>
                          {' '}
                          {contact[0].name}
                        </span>
                        <br />
                        Mobil: {contact[0].mobile} <br />
                        Email: {contact[0].email} <br />
                        Adress: {contact[0].address} <br />
                        Kontor: {contact[0].office}
                        <br />
                      </div>
                    </div>
                  )}
                </Popup>
              </p>
              <button className='logOutBtn text-2xl rounded-lg px-16 py-2 mb-12 mt-6'>
              <Link to='/'>LOGGA UT</Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className='mt-auto p-4'>
        <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2 mb-12 mt-6'>
          <Link to='/Select'>GÅ VIDARE</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
