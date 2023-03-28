import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import CardContainer from './CardContainer';
import Cards from './Cards';
import Categories from './Categories';
import History from './History';

function MainContainer() {
  return (
    <div className='col-span-11 mt-10 flex'>
       <Categories/>
    <div className='grow flex flex-col'>
     <CardContainer/>
     <History/>
     </div>
     {/* <div className='grow-0'>
      
        </div> */}
       
     
        
    </div>
  )
}

export default MainContainer