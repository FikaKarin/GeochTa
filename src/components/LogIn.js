import { useEffect, useState } from 'react';

import Top from '../images/BankIdTop.jpg';
import Bottom from '../images/BankIdBottom.png';

import '../style/LogIn.css';

//Login component
//input with personNumber value from db.json as login
//Login-button
//fetch parents from db.json
//if-statement for log in
const LogIn = () => {
  const [parent, setParent] = useState(null);

  /*   let personNrVar = parent.personNumber */
  const getParent = async () => {
    const response = await fetch('http://localhost:3001/parents/0')
      .then((response) => response.json())
      .then((response) => response);

    // update the state
    setParent(response);
  };

  useEffect(() => {
    getParent();
  }, []);

  //If personNumber in object matches input value - valid login 
  //and redirect to /Welcome Otherwise alert window
  let personNr = parent ? parent.personNumber : null;
  if (personNr != null) {
    document.getElementById('input').value = '9001243501';
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let input = document.getElementById('input').value;

    if (input === personNr) {
      e.target.input = '';
      window.location.assign('http://localhost:3000/Welcome');
    } else {
      alert('Personnummer krävs!');
    }
  };

  return (
    <div className='bankidbkg bg-white h-full '>
      <div>
        <img className='bankid mx-10 my-16' src={Top} alt='Top' />
        <br />
        <form action='submit'>
          <input id='input' type='number' />
          <button className='loginBtn' onClick={handleSubmit}>
            <span>
              <span className='text-red-600 font-bold text-sm'>DEMO</span> LOGGA
              IN
            </span>{' '}
          </button>
        </form>

        <img className='bankid' src={Bottom} alt='Bottom' />
      </div>
    </div>
  );
};

export default LogIn;
