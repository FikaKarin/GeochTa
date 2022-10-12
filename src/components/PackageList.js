import React, { Component } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import '../style/DropDown.css';
import '../style/PackageList.css';

class PackageList extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          package1yo: [
            { small: 'Strl: 44-50' },
            { medium: 'Strl: 50-56' },
            { large: 'Strl:56-60' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
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
                {this.state.data.map((item) => (
                  <div>
                    <ul>
                      {item.package1yo.map((sub) => (
                        <li className='size'>{sub.small}</li>
                      ))}
                    </ul>
                    <ul>
                      <li>5 sparkdräkter</li>
                      <li>5 tröjor</li>
                      <li>5 byxor</li>
                      <li>20 strumpor</li>
                      <li>1 mössa</li>
                      <li>2 par skor</li>
                      <li>4 par vantar</li>
                    </ul>
                  </div>
                ))}

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
              className='middleOption'
            >
              <Typography>Medium</Typography>
            </AccordionSummary>
            <AccordionDetails className='middleOption'>
              <Typography component={'span'}>
                {this.state.data.map((item) => (
                  <div>
                    <ul>
                      {item.package1yo.map((sub) => (
                        <li className='size'>{sub.medium}</li>
                      ))}
                    </ul>
                    <ul>
                      <li>5 sparkdräkter</li>
                      <li>5 tröjor</li>
                      <li>5 byxor</li>
                      <li>20 strumpor</li>
                      <li>1 mössa</li>
                      <li>2 par skor</li>
                      <li>4 par vantar</li>
                    </ul>
                  </div>
                ))}

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
              <Typography>Large</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={'span'}>
                {this.state.data.map((item) => (
                  <div>
                    <ul>
                      {item.package1yo.map((sub) => (
                        <li className='size'>{sub.large}</li>
                      ))}
                    </ul>
                    <ul>
                      <li>5 sparkdräkter</li>
                      <li>5 tröjor</li>
                      <li>5 byxor</li>
                      <li>20 strumpor</li>
                      <li>1 mössa</li>
                      <li>2 par skor</li>
                      <li>4 par vantar</li>
                    </ul>
                  </div>
                ))}

                <div className='mt-auto p-4'>
                  <button className='bg-orange-400 text-2xl rounded-lg px-16 py-2'>
                    <Link to='/Select'>Välj</Link>
                  </button>
                </div>
                <div className='mt-auto p-4'></div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
  }
}

export default PackageList;
