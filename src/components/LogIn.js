// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../style/LogIn.css';

const LogIn = () => {
  const [parent, setParent] = useState(null);

/*   let personNrVar = parent.personNumber */
const getParent = async () => {
    const response = await fetch('http://localhost:3001/parents/0')
      .then((response) => response.json())
      .then((response) => response)
    // update the state
    setParent(response);


  }; 

  useEffect(() => {
    getParent();
  }, []); 

//   console.log(parent ? parent.id : null)

  let personNr = ( parent ? parent.personNumber : null)

  let input = document.getElementById("input");
  //Lagra personNumber i en variabel
/*   const personNr = parent
 

  const input = document.getElementById(input).value;
  
  if(input !== personNr) {

  }
 */
  //if input matchar personNr variabel. SubmitHandler

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    if (personNr === input) {
      alert('Personnummer krävs!');
    } else if (personNr === input) {
      alert('Successfully logged in');
      e.target.input.value = '';
    }

    
  };
  
  


  const handleClick = e => {
    e.preventDefault();
    <Link to="/Welcome"></Link>
  };

  return (
    <div>
     {/*    {
            parent ? personNrVar : null
        } */}
      <label id='logIn' htmlFor='personNr'>
        Personnummer
      </label>
      <br />
      <form action="">
      <input onSubmit={handleSubmit} id="input" type='number' />
      <br />
      </form>
      <button onClick={handleClick} >LOGGA IN</button>
    </div>
  );
};

export default LogIn;
