import React, { useState } from "react";
import styled from "styled-components";
import { accData } from "./Mydata";
import { IconContext } from "react-icons";
import {FaAngleRight, FaAngleUp } from "react-icons/fa";
import './train.css'
import {FiPlus, FiMinus} from "react-icons/fi";
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
    width:99.8%;
    border:1px solid #999;
`
const Wrap = styled.div`
    border-bottom:1px solid #999;
    margin:0rem 1rem;  
    background: #fff;
    color:#444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding:.5rem 0rem;
    cursor: pointer;
    h1{padding:.7rem;font-size:1rem;}
    &.itemss3 {
        border-bottom: none;
      }
`
const Dropdown = styled.div`
    padding: 1rem 1rem;
`

export default function AccordionJr(){
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if(clicked === index){
            return setClicked(null);
        }
        setClicked(index);
    }
    return(
        <IconContext.Provider value={{color: '#444', size:'23px' }}>
            <AccordionSection>
                <Container>
                    {accData.map((item, index)=> {
                        return(
                            <div>
                                <Wrap className={"itemss" + index}  onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span className="spani2">  {clicked === index ? <FaAngleRight /> : <FaAngleUp />} </span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p className="downText" >{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </div>
                        )
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    )
}