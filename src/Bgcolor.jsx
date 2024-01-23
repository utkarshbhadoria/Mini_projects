import React from 'react';
import { useState } from 'react';

function Bgcolor() {
    const [color , setColor] = useState('white')

    const toRed = () =>{
        setColor('red')
        document.body.style.backgroundColor = "red"
    }


  return (
    
      <div className='main'   style={{backgroundColor: color}}>
          <h1>BG Color Change</h1>

          <button onClick={toRed}>Red</button><br />
          <button style={{backgroundColor: "blue"}} onClick={()=>setColor('blue')}>Blue</button><br />
          <button style={{backgroundColor: "green"}} onClick={()=>setColor('green')}>Green</button>

      </div>
    
  )
}

export default Bgcolor