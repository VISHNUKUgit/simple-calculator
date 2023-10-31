

import React from 'react'

function Dialpad({value,setValue,setSmValue}) {
    
    const handleButtonClick = (buttonValue) => {
        if (buttonValue === '%'){
            const res = eval(value)/100
            const newValue = '=' + res;
            setSmValue(value)
          setValue(newValue)
        }
        else if (buttonValue === '=' && value) {
          // Calculate and display the result

          const res = eval(value)
          const newValue = '=' + res;
          setSmValue(value)
          setValue(newValue)
        } 
        else if (buttonValue === 'AC') {
            setValue("");
            setSmValue("")
        }
        else if (buttonValue === 'CLR') {
            setValue(value.slice(0, -1));
        }
        else {
          // Update the input value with the clicked button
          setValue((prevValue) => prevValue + buttonValue);
        }
      };
    return (
        <div className='d-flex justify-content-center align-items-center'style={{flexDirection:'column'}} >
            <div className='d-flex'>
                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}}  onClick={() => handleButtonClick('AC')} v>AC</button>

                <button className='btn btn-primary'style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('CLR')}>CLR</button>

                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('%')}>%</button>

                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('/')} >÷</button>
            </div>
            <div className='d-flex'>
                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('7')}>7</button>

                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('8')}>8</button>

                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('9')}>9</button>

                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}}
                onClick={() => handleButtonClick('*')} >x</button>
            </div>
            <div className='d-flex'>
                <button className='btn btn-secondary'style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('4')}>4</button>

                <button className='btn btn-secondary'style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('5')}>5</button>

                <button className='btn btn-secondary'style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('6')}>6</button>

                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div className='d-flex'>
                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('1')}>1</button>

                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('2')}>2</button>

                <button className='btn btn-secondary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('3')}>3</button>

                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div className='d-flex'>
                <button className='btn' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('.')}>.</button>
                <button className='btn' style={{borderRadius:'0px',border:'1px solid black',width:'59px'}} onClick={() => handleButtonClick('0')}>0</button>
                <button className='btn btn-primary' style={{borderRadius:'0px',border:'1px solid black',width:'118px'}} onClick={() => handleButtonClick('=')}>=</button>
            </div>
        </div>
    )
}

export default Dialpad