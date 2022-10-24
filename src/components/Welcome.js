//välkomsttext
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import '../style/Welcome.css';
import Navbar from './Navbar';
import '../style/Button.css';
import { RiNumber1 } from 'react-icons/ri';

const Welcome = () => {
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
    if (parent && parent.children[0].package === '') {
      document.getElementById('packageStatus').innerHTML =
        'inget klädpaket ännu';
    }
  }, [parent]);

  return (
    <div className='flex flex-col bg-white h-full bg-opacity-80'>
      <Navbar />
      <div className='mt-8 space-y-8'>
        <div className='text-black text-4xl font-bold'>
          <div className='pageNumber1'>
            {' '}
            <RiNumber1 />
          </div>
          <br />
          {parent && <h1>Välkommen {parent.name}!</h1>}
        </div>
        <div className='bg-white mx-8 shadow-lg py-4 rounded-lg'>
          {parent && (
            <div className='space-y-4 text-xl'>
              <div>
                <p>
                  Du har{' '}
                  <span className='font-bold'>{parent.children.length}</span>{' '}
                  barn registrerat
                </p>
                <p>
                  som är{' '}
                  <span className='font-bold'>{parent.children[0].age}</span>{' '}
                  gammalt.
                </p>
                <p>
                  och har{' '}
                  <span id='packageStatus' className='font-bold'>
                    {parent.children[0].package}
                  </span>
                  .
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
                        måste du kontakta dina kontaktperson:{' '}
                        <br />
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
            </div>
          )}
        </div>
      </div>
      <div className='mt-auto p-4'>
        <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2 mb-12'>
          <Link to='/Select'>GÅ VIDARE</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
