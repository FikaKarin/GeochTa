import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';

//Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';

import { RiNumber3 } from 'react-icons/ri';

let buttonVisible = false;

//Confirm component
//Checkbox - if check = display next-page-button
const Confirm = () => {
  //AOS css - renders page with effect
  useEffect(() => {
    AOS.init();
  }, []);

  //Set state button not visible
  let [show, setShow] = React.useState(false);
  const onClick = () => {
    buttonVisible = !buttonVisible;
    setShow(buttonVisible);
  };

  //Set state checkbox not checked
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  //fetch contact from db.json
  const [contact, setContact] = useState(null);

  const getContact = async () => {
    const response = await fetch('http://localhost:3001/contact/0').then(
      (response) => response.json()
    );
    // update the state
    setContact(response);
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div
      data-aos='fade-down'
      data-aos-duration='900'
      className='confirm flex flex-col bg-white h-[58rem] bg-opacity-80'
    >
      <Navbar />
      <div className='mt-8 space-y-8'>
        <div className='pageNumber3'>
          <RiNumber3 />
        </div>
        <br />
        <div className='confirmBackground mx-8 shadow-lg py-4 rounded-lg'>
          <div className='confirmBox text-black text-3xl font-bold my-3'>
            <p>Så här går du tillväga</p>
          </div>
          <ul className='confirmText'>
            <li>Lägg kläderna i samma kartong som de kom i.</li>
            <li className='my-6'>
              Returnera kartongen på: <br />
              <span className='pt-3 font-bold text-lg'>
                {' '}
                {contact != null ? contact.office : 'Kontor ej valt'}
              </span>
              .<br />
              {contact != null ? contact.address : 'Kontor ej valt'}
              <br />
              (se öppettider i nästa steg{' '}
              <span className='font-bold text-green-500'>Orderbekräftelse</span>
              ).
            </li>
            <li className='my-6'>
              Vid inlämning av ditt paket sker utlämning av nytt paket.
            </li>
            <li>
              Du får en notis i appen när ditt gamla och nya paket registrerats.
            </li>
          </ul>

          {/* CHECKBOX and BUTTON */}
          <div className='m-8 mb-5'>
            <label>
              <p className='inline-flex'>
                <input
                  type='checkbox'
                  label='My Value'
                  checked={checked}
                  onChange={handleChange}
                  onClick={onClick}
                />
                <span className='font-bold'>
                  Jag har läst och förstått instruktionerna
                </span>
              </p>
            </label>
          </div>
          {checked ? (
            <div>
              <button className='confirmButton text-2xl rounded-lg px-16 py-2 text-white'>
                <Link to='/OrderApproved'>Bekräfta villkor</Link>
              </button>
            </div>
          ) : (
            show
          )}
        </div>
      </div>
    </div>
  );
};
export default Confirm;
