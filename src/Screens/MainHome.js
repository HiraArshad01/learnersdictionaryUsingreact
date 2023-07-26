import * as React from 'react';
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar';
import BasicCard from '../Components/BasicCard';


export default function MainHome() {
  return (
    <div>
      <div style={{display:'flex',backgroundColor:'navy', alignItems:'center',justifyContent:'center'}}>
        <h2 style={{display:'flex',color:'white'}}>LEARNERS DICTIONARY</h2>
      </div>
      <NavBar/>
      <div style={{display:'flex', flex: 1, backgroundColor:'#dcdcdc', flexWrap: 'nowrap', overflowX: 'scroll'}}>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
        <BasicCard/>
      </div>
      <div style={{backgroundColor:'#navy'}}>

      </div>
      <div style={{backgroundColor:'#orange'}}>

      </div>
      <div style={{backgroundColor:'#navy'}}>

      </div>
      <div style={{backgroundColor:'#orange'}}>

      </div>
   
    </div>
  );
}