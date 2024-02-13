import React, { useEffect, useRef,useState , useCallback } from 'react';


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
    
    // this operation can be done without useref but it gives more control over the code
    const copyToclipboard  = useCallback(()=>{
      passwordRef.current?.select(); //to optimize view ....this will select the password on copying
      passwordRef.current?.setSelectionRaange(0,10); //only select the 10 char of password
      window.navigator.clipboard.writeText(password) // 
    },[password])
    //here callback is used for optimization /optional

    useEffect(()=>{
      passwordGenerator()

    }, [length , Number , Char])

    const passwordRef = useRef(null);      // used here to get the reference of password from input field

      
    
  return (
    <div>
        <h1>PW Generator</h1>
        <div>
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef}/>
          <button onClick={copyToclipboard}>copy</button>
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