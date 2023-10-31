import React from 'react'

function Smdisplay({value,setValue,smValue}) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <input readOnly className='text-secondary pe-2' style={{outline:'none',border:'none',textAlign:'right',fontSize:'25px',width:'69%'}} type="text" value={smValue} />
    </div>
  )
}

export default Smdisplay