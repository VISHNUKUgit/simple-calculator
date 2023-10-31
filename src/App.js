import React, { useState } from 'react'
import Dialpad from './Components/Dialpad';
import LgDisplay from './Components/LgDisplay';
import Smdisplay from './Components/Smdisplay';
import './index.css'
function App() {
  const [dark,setDark] = useState(true)
  const [value, setValue] = useState('')
  const [smValue, setSmValue] = useState('')
  return (
    <div  className={`w-100 vh-100 d-flex  justify-content-center align-items-center`} style={{ backgroundColor: dark ? '' : '#20211f' }}>
      <div style={{position:'absolute',top:'0', left:'0', padding:'10px'}} onClick={()=>setDark(!dark)}>
        {dark ? <i class="fa-regular fa-sun fa-lg"></i> :<i class="fa-regular fa-moon fa-lg"></i>}
      </div>
      <div className='rounded pb-5 pt-3 shadow w-25 flex-column d-flex justify-content-center align-items-center'>
      <h1>Basic Calculator</h1>
        <div >
          <Smdisplay value={value} setValue={setValue} smValue={smValue} />
          <LgDisplay value={value} setValue={setValue} />
          <Dialpad value={value} setValue={setValue} setSmValue={setSmValue} dark={dark} />
        </div>
      </div>

    </div>
  );
}

export default App;
