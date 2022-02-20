import React, { useState } from "react";
import styled from "styled-components";
import { firstAccord } from "./data";
import { IconContext } from "react-icons";
import {FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import AccordionJr from "./AccordionJr";
import './train.css'
const AccordionSection = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    background: #fff;

`
const Container = styled.div`
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    width:100%;
    
`
const Wrap = styled.div`
    background: #fff;
    color:#444;
    border:1px solid #888;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding:0rem 1rem;
    cursor: pointer;
    h1{padding:0rem 1rem;font-size:1.5rem; margin:0rem}
    p{padding:0rem 1rem; margin:0; font-size:.8rem;}
`
const Dropdown = styled.div`
    padding: 0rem 0rem;     
`
export default function Accord({props}){
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }
        setClicked(index);
    }
    return(
        <IconContext.Provider value={{color: '#444', size:'36px' }}>
            <div className="accords">
                <AccordionSection>
                    <Container>
                        {firstAccord.map((item, index)=> {
                            return(
                                <div>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                    <div className="personAbout" >
                                        <span className="person"> <MdPersonOutline style={{color:"#1967db"}} /> </span>
                                        <div>
                                            <h1>  {item.question}</h1>
                                            <p>4 articles in this Topic</p>
                                        </div>
                                    </div>
                                    <span className="spani" > {clicked === index ? <FaAngleUp /> : <FaAngleDown /> } </span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            {props}
                                        </Dropdown>
                                    ) : null}
                                </div>
                            )
                        })}
                    </Container>
                </AccordionSection>
            </div>
            
        </IconContext.Provider>
    )
}