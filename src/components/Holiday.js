import React from 'react';
import { useSelector } from 'react-redux';



const Holiday = () => {
    const dayInfo = useSelector(state => state.day);
    return (
        <div>{
              dayInfo.map( a => 
                  <div>
                      <h1>{a.name}</h1>
                  </div>
              )
              }
        </div>)}

export default Holiday