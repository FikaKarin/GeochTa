// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import '../style/PackageList.css';
import SelectButton from './SelectButton';

const PackageList = () => {
  const [packages, setPackages] = useState(null);

  const getPackages = async () => {
    const response = await fetch('http://localhost:3001/packages')
      .then((response) => response.json())
      .then((response) => response);
    // update the state
    setPackages(response);
  };

  useEffect(() => {
    getPackages();
  }, []);

  return (
    <div className='mt-6 space-y-6 px-2 rounded-lg'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Small</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size'>{packages ? packages[0].size : ''}</div>
                <br />
                {packages
                  ? packages[0].productlist.map((prod) => (
                      <div> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[0])}>
                <Link to='/Confirm'>Välj</Link>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          className='middleOption'
        >
          <Typography>Medium</Typography>
        </AccordionSummary>
        <AccordionDetails className='middleOption'>
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size'>{packages ? packages[1].size : ''}</div>
                <br />
                {packages
                  ? packages[1].productlist.map((prod) => (
                      <div> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[1])}>
                <Link to='/Confirm'>Välj</Link>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Large</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size'>{packages ? packages[2].size : ''}</div>
                <br />
                {packages
                  ? packages[2].productlist.map((prod) => (
                      <div> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[2])}>
                <Link to='/Confirm'>Välj</Link>
              </button>
            </div>
            <div className='mt-auto p-4'></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PackageList;

// class PackageList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       package1yo: [
//         { name: "small", size: "Strl 44 - 50" },
//         { name: "medium", size: "Strl 50 - 56" },
//         { name: "large", size: "Strl 56 - 60" },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="mt-6 space-y-6 px-2 rounded-lg">
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography>Small</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography component={"span"}>
//                 <div>
//                   <ul>
//                       <li className="size">{this.state.package1yo[0].size}</li>
//                   </ul>
//                   <ul>
//                     <li>5 sparkdräkter</li>
//                     <li>5 tröjor</li>
//                     <li>5 byxor</li>
//                     <li>20 strumpor</li>
//                     <li>1 mössa</li>
//                     <li>2 par skor</li>
//                     <li>4 par vantar</li>
//                   </ul>
//                 </div>

//               <div className="mt-auto p-4">
//                 <button
//                   className="btn"
//                   onClick={() => SelectButton(this.state.package1yo[0].size)}
//                 >
//                   <Link to="/Confirm">Välj</Link>
//                 </button>
//               </div>
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//             className="middleOption"
//           >
//             <Typography>Medium</Typography>
//           </AccordionSummary>
//           <AccordionDetails className="middleOption">
//             <Typography component={"span"}>
//                 <div>
//                   <ul>
//                       <li className="size">{this.state.package1yo[1].size}</li>
//                   </ul>
//                   <ul>
//                     <li>5 sparkdräkter</li>
//                     <li>5 tröjor</li>
//                     <li>5 byxor</li>
//                     <li>20 strumpor</li>
//                     <li>1 mössa</li>
//                     <li>2 par skor</li>
//                     <li>4 par vantar</li>
//                   </ul>
//                 </div>

//               <div className="mt-auto p-4">
//                 <button className="btn" onClick={() => SelectButton(this.state.package1yo[1].size)}>
//                   <Link to="/Confirm">Välj</Link>
//                 </button>
//               </div>
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography>Large</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography component={"span"}>
//                 <div>
//                   <ul>
//                       <li className="size">{this.state.package1yo[2].size}</li>
//                   </ul>
//                   <ul>
//                     <li>5 sparkdräkter</li>
//                     <li>5 tröjor</li>
//                     <li>5 byxor</li>
//                     <li>20 strumpor</li>
//                     <li>1 mössa</li>
//                     <li>2 par skor</li>
//                     <li>4 par vantar</li>
//                   </ul>
//                 </div>

//               <div className="mt-auto p-4">
//                 <button className="btn" onClick={() => SelectButton(this.state.package1yo[2].size)}>
//                   <Link to="/Confirm">Välj</Link>
//                 </button>
//               </div>
//               <div className="mt-auto p-4"></div>
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </div>
//     );
//   }
// }

// export default PackageList;
