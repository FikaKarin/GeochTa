import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import '../style/DropDown.css';

export default function SimpleAccordion() {
  return (
    <div className="mt-6 space-y-6 px-2 rounded-lg">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Strl 44-50</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ul>
              <li>5 sparkdräkter</li>
              <li>5 tröjor</li>
              <li>5 byxor</li>
              <li>20 strumpor</li>
              <li>1 mössa</li>
              <li>2 par skor</li>
              <li>4 par vantar</li>
            </ul>
            <div className='mt-auto p-4'>
              <button className='bg-orange-400 text-2xl rounded-lg px-16 py-'>
                <Link to='/Select'>Välj</Link>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          className='middleOption'
        >
          <Typography>Strl 44-50</Typography>
        </AccordionSummary>
        <AccordionDetails className="middleOption">
          <Typography component={'span'}>
            <ul>
              <li>5 sparkdräkter</li>
              <li>5 tröjor</li>
              <li>5 byxor</li>
              <li>20 strumpor</li>
              <li>1 mössa</li>
              <li>2 par skor</li>
              <li>4 par vantar</li>
            </ul>
            <div className='mt-auto p-4'>
              <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2'>
                <Link to='/Select'>Välj</Link>
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
          <Typography>Strl 44-50</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <ul>
              <li>5 sparkdräkter</li>
              <li>5 tröjor</li>
              <li>5 byxor</li>
              <li>20 strumpor</li>
              <li>1 mössa</li>
              <li>2 par skor</li>
              <li>4 par vantar</li>
            </ul>
            <div className='mt-auto p-4'>
              <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2'>
                <Link to='/Select'>Välj</Link>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
