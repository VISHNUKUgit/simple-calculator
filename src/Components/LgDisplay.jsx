import React from 'react'

function LgDisplay({value}) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <input readOnly className='pe-2' style={{outline:'none',border:'none',textAlign:'right',fontSize:'35px', width:'69%'}} type="text" value={value} placeholder='0' />
    </div>
  )
}

export default LgDisplay