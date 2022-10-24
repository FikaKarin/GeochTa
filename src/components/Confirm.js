// Bekräftelse av villkor
// Checkbox
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../style/DropDown.css';
import React from 'react';
import { RiNumber3 } from 'react-icons/ri';


let buttonVisible = false;

// CHECKBOX AND CONFIRM BUTTON
const Confirm = () => {

  let [show, setShow] = React.useState(false);
  const onClick = () => {
    buttonVisible = !buttonVisible;
    setShow(buttonVisible);
  };
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='flex flex-col bg-white h-full bg-opacity-80'>
      <Navbar />
      <div className='mt-8 space-y-8'>
      <div className='pageNumber3'>
            <RiNumber3 />
          </div><br />
        <div className='bg-orange-100 mx-8 shadow-lg py-4 rounded-lg'>
         
          <div className='text-black text-3xl font-bold my-3'>
            <p>Så här går du tillväga</p>
          </div>
          <ul className='confirmText'>
            <li>Lägg kläderna i samma kartong som de kom i.</li>
            <li>Returnera kartongen på Nacka kommun.</li>
            <li>Vid inlämning av ditt paket sker utlämning av nytt paket.</li>
            <li>
              Du får en notis i appen när ditt gamla och nya paket registrerats.
            </li>
          </ul>
          {/* CHECKBOX */}
          <div className='m-10 mb-5'>
            <label>
              <p className='inline-flex'>
                <input
                  type='checkbox'
                  label='My Value'
                  checked={checked}
                  onChange={handleChange}
                  onClick={onClick}
                />
                <span className='font-bold'>Jag har läst och förstått instruktionerna</span>
              </p>
            </label>
          </div>
          {show ? (
            <div>
              <button className='bg-green-600 text-2xl rounded-lg px-16 py-2 text-white'>
                <Link to='/OrderApproved'>Bekräfta villkor</Link>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Confirm;
