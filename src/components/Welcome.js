//välkomsttext
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/Welcome.css';
import Navbar from './Navbar';
import '../style/Button.css';

const Welcome = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='welcome-content'>
        <div className='welcome-header'>
          <h1>Välkommen</h1>
          <div>
            {data && data.length > 0 && data.map((item) => 
            <p>{item.fName} </p>
            )}
            </div>
            <p>, du har</p>
        
        </div>
        <div className='welcome-box'>BOX</div>
        <button className='btn'>
          <Link to='/Select'>Gå vidare</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
