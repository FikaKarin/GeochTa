import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import '../style/InfoButton.css';

import { HiInformationCircle } from 'react-icons/hi';

import NrOne from '../images/nrOne.PNG';
import NrTwo from '../images/nrTwo.PNG';
import NrThree from '../images/nrThree.PNG';

const infoButton = () => {
  return (
    <div >
      <Popup
        trigger={
          <button id='navbarInfo'>
            {' '}
            <HiInformationCircle />{' '}
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
              <br />
              <div id='infoContent'>
                <div>
                  <img className='oneImg' src={NrOne} alt='nrOne' />
                </div>
                <div id='text'>Kontrollera att dina uppgifter stämmer. </div>
                <div>
                  <img className='twoImg' src={NrTwo} alt='nrTwo' />
                </div>
                <div id='text'>Kontrollera storlek i klädpaketen och klicka på VÄLJ för att komma vidare.</div>

                <div>
                  <img className='threeImg' src={NrThree} alt='nrThree' />
                </div>
                <div id='text'>Läs igenom reglerna för tjänsten och kryssa i rutan att du hr förstått. Sedan klicka på BEKRÄFTA.</div>
              </div>

              <br />
              
            </div>
            <center><button className='logOutBtnModal text-xl rounded-lg px-10 py-2 mb-12 mt-6 '>
              <Link to='/'>LOGGA UT</Link>
              </button></center>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default infoButton;
