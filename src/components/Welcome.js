//välkomsttext
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/Welcome.css';
import Navbar from './Navbar';
import '../style/Button.css';

const Welcome = () => {
  const [parent, setParent] = useState(null);

  useEffect(() => {
    const getParent = async () => {
      const response = await fetch('http://localhost:3001/parents/0').then(
        (response) => response.json()
      );
      // update the state
      setParent(response);
    };
    getParent();
  }, []);

  return (
    <div className='flex flex-col bg-white h-full bg-opacity-80'>
      <Navbar />
      <div className='mt-8 space-y-8'>
        <div className='text-black text-4xl font-bold'>
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
                  gammal.
                </p>
              </div>
              <div>
                <p>Din registrerade adress är:</p>
                <p>{parent.adress}</p>
              </div>
              <p className='text-orange-300 underline'>
                Stämmer inte dina uppgifter?
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='mt-auto p-4'>
        <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2'>
          <Link to='/Select'>GÅ VIDARE</Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
