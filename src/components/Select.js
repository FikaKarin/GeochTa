// import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
// import DropDown from './DropDown';
import PackageList from "./PackageList";


const Select = () => {
    
    return (

    <div className="flex flex-col bg-white h-full bg-opacity-80">
        <Navbar />
        <div className="mt-8 space-y-4 px-8">
            <div>
                <h1 className="text-black text-4xl font-bold">Välj paket</h1>
            </div>
            <div>
            <p className="font-semibold">Välj mellan 3 olika storlekar nedan. Alla paket kommer i blandade färger.</p>
            <p className="font-semibold">Välj storlek</p>
            </div>
            <PackageList />
            {/* <DropDown /> */}
        </div >
    </div >
    
    );
}

export default Select;
