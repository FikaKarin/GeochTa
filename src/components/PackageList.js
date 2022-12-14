import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../style/PackageList.css';

import SelectButton from './SelectButton';

//PackageList component
//fetch Packages and products from db.json
//display in Accordion, Typography for drop-down effect
//SelectButton component to save choice to db.json object + Link to /Confirm
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
    <div className='selectwidth mt-6 space-y-6 px-2 rounded-lg'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          
        >
          <Typography><span className='sizeSmall font-bold'>Small</span></Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size font-bold text-lg'>
                  {packages ? packages[0].size : ''}
                </div>
                <br />
                {packages
                  ? packages[0].productlist.map((prod) => (
                      <div className='prod1 leading-9 italic' key={prod.id}> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[0])}>
                <Link to='/Confirm'>V??lj</Link>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel2a-header'
        >
          <Typography><span className='sizeMedium font-bold'>Medium</span></Typography>
        </AccordionSummary>
        <AccordionDetails id='panel2a-header'>
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size font-bold text-xl'>
                  {packages ? packages[1].size : ''}
                </div>
                <br />
                {packages
                  ? packages[1].productlist.map((prod) => (
                      <div className='leading-9 prod2 italic' key={prod.id}> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[1])}>
                <Link to='/Confirm'>V??lj</Link>
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
          <Typography><span className='sizeLarge font-bold'>Large</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div>
              <ul>
                <div className='size font-bold text-xl'>{packages ? packages[2].size : ''}</div>
                <br />
                {packages
                  ? packages[2].productlist.map((prod) => (
                      <div className='prod3 leading-9 italic' key={prod.id}> {prod.product} </div>
                    ))
                  : ''}
              </ul>
            </div>

            <div className='mt-auto p-4'>
              <button className='btn' onClick={() => SelectButton(packages[2])}>
                <Link to='/Confirm'>V??lj</Link>
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
