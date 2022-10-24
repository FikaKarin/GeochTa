import React, { Component } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "../style/DropDown.css";
import "../style/PackageList.css";
import SelectButton from "./SelectButton";

//1 funktion för 3 olika val, onClick för knappen i Välj (data = packag1yo[size])
//key för valet så det kan sparas i knapp
//onclick="storeSelection('small')"
//function storeSelection(size) {}
//egen js-fil för knapparna
//lagra i db.json-filen vi redan har i packages.

class PackageList extends Component {
  constructor() {
    super();
    this.state = {
      package1yo: [
        { name: "small", size: "Strl 44 - 50" },
        { name: "medium", size: "Strl 50 - 56" },
        { name: "large", size: "Strl 56 - 60" },
      ],
    };
  }

  render() {
    return (
      <div className="mt-6 space-y-6 px-2 rounded-lg">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Small</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
                <div>
                  <ul>
                      <li className="size">{this.state.package1yo[0].size}</li>
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

              <div className="mt-auto p-4">
                <button
                  className="btn"
                  onClick={() => SelectButton(this.state.package1yo[0].size)}
                >
                  <Link to="/Confirm">Välj</Link>
                </button>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="middleOption"
          >
            <Typography>Medium</Typography>
          </AccordionSummary>
          <AccordionDetails className="middleOption">
            <Typography component={"span"}>
                <div>
                  <ul>
                      <li className="size">{this.state.package1yo[1].size}</li>
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

              <div className="mt-auto p-4">
                <button className="btn" onClick={() => SelectButton(this.state.package1yo[1].size)}>
                  <Link to="/Confirm">Välj</Link>
                </button>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Large</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"}>
                <div>
                  <ul>
                      <li className="size">{this.state.package1yo[2].size}</li>
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

              <div className="mt-auto p-4">
                <button className="btn" onClick={() => SelectButton(this.state.package1yo[2].size)}>
                  <Link to="/Confirm">Välj</Link>
                </button>
              </div>
              <div className="mt-auto p-4"></div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

export default PackageList;
