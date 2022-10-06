//Tillbakaknapp
//Hemknapp
//infoknapp
import React from 'react';
import Popup from 'reactjs-popup';
import '../style/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { HiArrowLeft } from 'react-icons/hi';
import { GrStatusInfo } from 'react-icons/gr';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbarContent">
            <button id="navbarBtn" onClick={() => navigate(-1)}>< HiArrowLeft /></button>
            <Link to="/Welcome" id="homeLink" ><GrHomeRounded /></Link>
            <Popup
                trigger={<button className="button" id="navbarInfo"> < GrStatusInfo /> </button>}
                modal
                nested
            >
                {close => (
                    < div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="content">
                            *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas consequuntur doloribus eveniet. Iste laborum quos earum harum, dignissimos modi obcaecati? Magnam molestiae modi non recusandae odit sed veritatis mollitia dolorum!
                            <br />
                        </div>

                    </div>
                )
                }
            </Popup >

        </div >
  );
};

export default Navbar;
