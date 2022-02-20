import { useState } from 'react';
import MyList from "./components/First_task/MyList";
import Cards from './components/First_task/cards';
import Third from './components/Second_task/Third';
import styled from 'styled-components'
import { Tab, Tabs, TabPanel } from './components/Second_task/Simpletabs';
import Accordion from './components/Second_task/Accordion';
import AccordionJr from './components/Second_task/AccordionJr';
import Accord from './components/Second_task/Accord';
import "./App.css"
import {
  Wordpress,
  Email,
  Free,
  Domain,
  Webhosting,
  DS,
  VPS
} from './components/Second_task/data';

const TabsContainer = styled.div`
  display:flex;
  padding: 2px;
`;
const TabPanelContainer = styled.div`
  height:100%;
`
export default function App() {  
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [active, setActive] = useState("")
  const handleChange = (e, value) => {
    setActiveTab(value)
  }   
  const listItemsDomain = Domain.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  })
  const listItemsWebhosting = Webhosting.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  })
  const listItemsDS = DS.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  })
  const listItemsVPS = VPS.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  }) 
  const listItemsWordpress = Wordpress.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  }) 
  const listItemsEmail = Email.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  })
  const listItemsFree = Free.map(card => {
    return(
      <li className='listItems' key={card.id}> 
        <p className='cardName' > {card.name} </p>
        <div className='middle' >
          <p> {card.price} </p>
          <p className='underline' > Instead of $10.99/yr </p>
        </div>
          <button className='listButton' >Buy now</button>
      </li>
    )
  })
  return (
   <div className="App">
     <MyList /><Cards />
      <div className="priceTable">
        <TabsContainer>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label="Domains" value={1}></Tab>
            <Tab label="Web Hosting" value={2}></Tab>
            <Tab label="Virtual Cloud Servers" value={3}></Tab>
            <Tab label="Wordpress Hosting" value={4}></Tab>
            <Tab label="Email Hosting" value={5}></Tab>
            <Tab label="VPS Hosting Servers" value={6}></Tab>
            <Tab label="Free Hosting" value={7}></Tab>
          </Tabs>
        </TabsContainer>
        <TabPanelContainer>
          <TabPanel value={activeTab} selectedIndex={1}>
            <ul className='orderList'>
              {listItemsDomain}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={2}>
            <ul className='orderList'>
              {listItemsWebhosting}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={3}>
            <ul className='orderList'>
              {listItemsDS}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={4}>
            <ul className='orderList'>

              {listItemsWordpress}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={5}>
            <ul className='orderList'>
              {listItemsEmail}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={6}>
            <ul className='orderList'>
              {listItemsVPS}
            </ul>
          </TabPanel>
          <TabPanel value={activeTab} selectedIndex={7}>
            <ul className='orderList'>
              {listItemsFree}
            </ul>
          </TabPanel>
        </TabPanelContainer>
      </div>
      <Accord props={<AccordionJr />} />
      <Accordion />
      <button className='openModalBtn' onClick={() => setOpenModal(true)}>
        Show popup
      </button>
      {openModal && <Third closeModal={setOpenModal} />}
    </div>
  );
}