import {react, useState} from "react";
import './third.css'
const colors = [
    {colorTitle:"Font Color", number:"#444444", colorImg:"img"},
    {colorTitle:"Background Color", number:"#FFFFFF", colorImg:"img"},
    {colorTitle:"Button Color", number:"#2072EF", colorImg:"img"},
    {colorTitle:"Button Border Color", number:"#2072EF", colorImg:"img"},
    {colorTitle:"Buttons Mouseover Color", number:"#0053D1", colorImg:"img"}
]

export default function Third({closeModal}){

        let colorNr = "";
    const listItems = colors.map(color => <li className="colorLines" >
            <p>{color.colorTitle}</p>
            <div className="imgs" >
                <p>{color.number}</p>
                <div style={{backgroundColor:color.number}} className="boxColor">
                </div>
            </div>
        </li>)

    return(
        <div className="modalBackground" >
            <div className="modalContainer" >
                <div className="title">
                    <h1>Theme Color </h1>
                    <a href="#" >Change theme</a>
                </div>
                <div className="body"> 
                      <ul className="colorList" >
                          {listItems}
                      </ul>
                </div>
                <div className="footer">
                    <button className="cancBtn" onClick={() => closeModal(false)} >Cancel</button>
                    <button className="contBtn"  onClick={() => closeModal(false)} >Save</button>
                </div>
            </div>
        </div>
    )
}
