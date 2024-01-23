import React, { useEffect } from 'react';
import { useState , useCallback} from 'react';

function PWgenerator() {
    const [length , setLength ] = useState(8) ;
    const [Number , setNumber ] = useState(false) ; 
    const [Char   , setChar   ] = useState(false) ;
    const [password, setPassword] = useState("")   

    const passwordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(Number) str+="0123456789"
      if(Char) str+="!@#$%^&*(){}"

      for( let i=1 ; i<=length;i++){
        let char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char)
      }

      setPassword(pass)

    }, [length , Number , Char])

    useEffect(()=>{
      passwordGenerator()

    }, [length , Number , Char])

      
    
  return (
    <div>
        <h1>PW Generator</h1>
        <div>
          <input type="text" value={password} placeholder="password" readOnly/>
          <button>copy</button>
        </div>
        <div style={{display:"flex"}}>
          <input type="range" min={6} max={60} value={length} onChange={(e) => {setLength(e.target.value)}}></input>
          <label >Length: {length}</label>

          <div>
            <input type="checkbox" defaultChecked ={Number} onChange={()=>{setNumber((prev) => !prev)}}/>
            <label>Number</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked ={Char} onChange={()=>{setChar((prev) => !prev)}}/>
            <label>Character</label>
          </div>

        </div>
        

    </div>

  )
}

export default PWgenerator