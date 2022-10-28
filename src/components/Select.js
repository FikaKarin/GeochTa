// import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
// import DropDown from './DropDown';
import PackageList from "./PackageList";
import { RiNumber2 } from 'react-icons/ri';


const Select = () => {
    
    return (

    <div className="flex flex-col bg-white h-full bg-opacity-80">
        <Navbar />
        <div className="mt-8 space-y-4 px-8">
            <div className='text-black text-4xl font-bold'>
                <div className="pageNumber2">
                <RiNumber2 />
                </div><br />
                <h1 className="text-black text-4xl font-bold">Välj paket</h1>
            </div>
            <div>
            <p className="m-2 p-2 py-8 my-4 flex flex-col bg-white h-full bg-opacity-100 font-semibold">Välj mellan 3 olika storlekar nedan. Alla paket kommer i blandade färger.</p>
            <p className=" flex flex-col bg-white h-full bg-opacity-80 font-semibold text-2xl">Välj storlek</p>
            </div>
            <PackageList />
        </div >
    </div >
    
    );
}

export default Select;
