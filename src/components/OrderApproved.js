//Order confirmation
//Öppettider
//OK-knapp
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import '../style/OrderApproved.css';

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

useEffect(() => {
    if (parent && parent.children[0].package === "") {
        getParent();
        document.getElementById('packageStatus').innerHTML = 'inget klädpaket ännu';
    }
}, [parent]);

  return (
    <div>
      <Navbar />
      <div className='bg-white mx-8 shadow-lg py-4 rounded-lg'>
        <p className='space-y-4 text-xl'>ORDERBEKRÄFTELSE</p>
        <br />
        <p bg-white mx-8 shadow-lg py-4 rounded-lg>
          Du har beställt klädpaket: <br />
          <span id='packageStatus' className='font-bold'>
            {parent.children[0].package}
          </span>
          .
        </p>
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
