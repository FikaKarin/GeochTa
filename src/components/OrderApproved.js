//Order confirmation
//Öppettider
//OK-knapp
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import '../style/OrderApproved.css';
import Kretslopp from '../images/PaketKretslopp.PNG';
import { FcApproval } from 'react-icons/fc';
import {ImArrowDown} from 'react-icons/im';

const OrderApproved = () => {
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
    <div>
      <Navbar />
      <div className='bg-white mx-8 shadow-lg py-4 rounded-lg m-8'>
        <p className='space-y-4 text-2xl m-8 font-bold '>ORDERBEKRÄFTELSE</p>
        <br />
        <div className='check'>
          <FcApproval />
        </div>
        <br />
        Du har beställt klädpaket: <br />
        <span id='packageStatus' className='font-bold text-xl'>
          {parent != null ?  parent.children[0].package : ' inget paket'}
        </span>
        . <br />
        <div className='arrow'>
        <ImArrowDown />
        </div>
        <div className='m-8'>
          <div className='text-lg'>
          Hämta och lämna paket här:
          </div>
          <br />
          <div className='font-bold text-2xl'>
            {contact != null ? contact.office : 'Kontor ej valt'}
          </div>
          {contact != null ? contact.address : 'Kontor ej valt'}
          <br />
          <br />
          <p className='openHours font-bold'>Öppettider:</p>
          {contact != null ? contact.openHours : 'Kontor ej valt'}<br/><br />
          <img src={Kretslopp} alt='Logo' />
        </div>
      </div>
      <div className='orderApproved'>
        <br />
        <Link className='btn' to='/Welcome'>
          Tillbaka till Startsidan
        </Link>
      </div>
    </div>
  );
};

export default OrderApproved;
