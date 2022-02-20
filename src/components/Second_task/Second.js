import React,{useState} from 'react'

const tabNames = [
    {id:1,name:"Domains"},
    {id:2,name:"Web Hosting"},
    {id:3,name:"Dedicated Servers"},
    {id:4,name:"Virtual Cloud Servers"},
    {id:5,name:"Wordpress Hosting"},
    {id:6,name:"Email Hosting"},
    {id:7,name:"VPS Hosting Services"},
    {id:8,name:"Free Hosting"}
]

function Second() {
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const [toggleState, setToggleState] = useState(1);
    const listTabs = tabNames.map(tabName => {
        
        <div className={toggleState === tabName.id ? "tabs active-tabs" : "tabs"} 
        onClick={() => {toggleTab(tabName.id)}} >
                {tabName.name} </div>
    })
  return (
    <div className='container'>
        <div className='bloc-tabs' >
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => {toggleTab(1)}} >
                Tab 1 </div>
            <div  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => {toggleTab(2)}} >Tab 2  </div>
            <div  className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => {toggleTab(3)}} >Tab 3 </div>
        </div>
        <div>
        
        </div>
        <div className='content-tabs'>
            <div className={toggleState === 1 ? "content active-content" : "content"} >
                <h2>Content 1</h2>
                <p>$5.99/yr </p>
                <p>Insted of 10.99/yr</p>
                <button>Buy Now</button>
            </div>
            <div className={toggleState === 2 ? "content active-content" : "content"} >
                <h2>Content 2</h2>
                <hr />
                <p>Lorem ipsum 22</p>
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"} >
                <h2>Content 3</h2>
                <hr />
                <p>Lorem ipsum 33</p>
            </div>
        </div>
    </div>
  )
}

export default Second