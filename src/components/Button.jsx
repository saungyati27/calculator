import React from 'react'

const Button = ({handleCauculation}) => {
  return (
    <div className=' bg-black grid grid-cols-4 w-1/3'>
      <button onClick={(e)=>handleCauculation("C",e.target.innerText)} className=' p-4 text-white hover:bg-gray-900 border border-gray-300 transition duration-300'>C</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300 '>(</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>)</button>
      <button onClick={(e)=>handleCauculation("AC",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>AC</button>

      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>1</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>2</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>3</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>+</button>
      

      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>4</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>5</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>6</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>-</button>


      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover :bg-gray-800 border border-gray-300 transition duration-300'>7</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>8</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>9</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>*</button>

      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover :bg-gray-800 border border-gray-300 transition duration-300'>.</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>0</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>00</button>
      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>&divide;</button>

      <button onClick={(e)=>handleCauculation("DEFAULT",e.target.innerText)} className=' p-4 text-white hover:bg-gray-800 border border-gray-300 transition duration-300'>%</button>
      <button onClick={(e)=>handleCauculation("=",e.target.innerText)} className=' p-4 text-white hover:bg-amber-500 border border-gray-300 transition duration-300 bg-amber-700 col-span-3'>=</button>
        
    </div>
  )
}

export default Button
