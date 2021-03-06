import React, { useState } from "react";
import styled from "styled-components";
import { oneAccord } from "./Mydata";
import './Train'
import { IconContext } from "react-icons";
import {FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa";
import './train.css'
const AccordionSection = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width:100%;
    background: #fff;
    border:1px solid #888;
    border-radius:4px;
`
const Container = styled.div`
    width:100%;    
`
const Wrap = styled.div`
    background: #fff;
    color:#444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding:0rem 1rem;
    cursor: pointer;
    h1{padding:0rem 0rem;font-size:1.5rem; margin:0rem}
    p{padding:0rem 1rem; margin:0; font-size:.8rem;}
`
const Dropdown = styled.div`
    padding: 1rem 2rem; 
    border-top:1px solid #999;
    margin:0rem 1rem;   
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
                        {oneAccord.map((item, index)=> {
                            return(
                                <div>
                                    <Wrap onClick={() => toggle(index)} key={index}>
                                    <div className="personAbout" >
                                        <div>
                                            <h1>  {item.question}</h1>
                                        </div>
                                    </div>
                                    <span className="spani" > {clicked === index ? <FaAngleUp /> : <FaAngleDown /> } </span>
                                    </Wrap>
                                    {clicked === index ? (
                                        <Dropdown>
                                            <div className="textUnder" >
                                                <p> {item.lorem} </p>
                                            </div>
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