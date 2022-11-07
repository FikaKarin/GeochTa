import { useEffect } from 'react';

//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar';
import PackageList from './PackageList';

import { RiNumber2 } from 'react-icons/ri';

//Select component
//Display PackageList component
const Select = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos='fade-left'
      data-aos-duration='900'
      className='select flex flex-col bg-white bg-opacity-80 h-[140rem]'
    >
      <Navbar />
      <div className='mt-8 space-y-4 px-8'>
        <div className='text-black text-4xl font-bold'>
          <div className='pageNumber2'>
            <RiNumber2 />
          </div>
          <br />
          <h1 className='text-black text-4xl font-bold'>Välj paket</h1>
        </div>
        <div>
          <p className='selectP2 m-2 py-8 my-4 flex flex-col bg-white bg-opacity-70 rounded-xl font-semibold'>
            Välj mellan 3 olika storlekar nedan. Alla paket kommer i blandade
            färger.
          </p>
          <p className='font-semibold text-2xl'>Välj storlek</p>
        </div>
        <PackageList />
        <br />
      </div>
    </div>
  );
};

export default Select;
