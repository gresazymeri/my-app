import React from "react"
import "./firstTask.css"
import { CardItems } from "./cardItems"
import Girlsmiling from "./images/girl-smiling.jpg"

function Cards(){

const mycards=CardItems.map(word =>
  
        <div className="card">
        <div className=" title">{word.title}</div>
        <div >
            <button className="btn-n" style={{background:word.lastBG}}  >
                {word.mybtn}
            </button>
        </div>
        <div className="name">{word.name} <img className="my-img" src={Girlsmiling} /> </div>
        
        <div className="text">{word.text}</div>
        <div><button className="second-btn">Download</button></div>
        

    </div>
)
return <div className='cardss'>{mycards}</div>
}
export default Cards