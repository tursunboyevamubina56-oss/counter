
import React, { useState } from 'react'
import rasm from '../src/assets/hero.png'
const App = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

  return (
    <div>
      <div className="flex justify-start items-center gap-5 mt-20 mb-10">
        <h1 className="text-3xl font-bold mr-30">counter</h1>
      <button className='h-20 w-31 rounded-2xl bg-gray-50 text-4xl font-bold' onClick={() => setCount(count + 1)}>+</button>

      <h1 className='text-4xl'>{count}</h1>

      <button className='h-20 w-31 rounded-2xl bg-gray-50 text-4xl font-bold' onClick={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}>-</button>

      </div>
      <hr />
       
       <div className="mt-10 mb-10 flex flex-col justify-start items-start gap-5  ml-10">
    <h1 className="text-3xl font-bold pb-10">Hidden Component</h1>
      
      <div className="flex justify-start items-center gap-10">
      <button className='h-10 w-31 rounded-xl bg-blue-600 text-2xl font-bold text-white'onClick={() => setShow(true)}>show</button>
      <button className='h-10 w-31 rounded-xl bg-black text-2xl font-bold text-white' onClick={() => setShow(false)}>hidden</button>
     
      </div>
       {
        show && (
          <img src={rasm} alt="" className='h-30 w-30 ml-20'/>
        )
      }
</div>
<hr />
<div className=" mb-30 mt-20">
   <input className='h-10 w-60 rounded-xl ml-30 pl-10 bg-gray-100'
   placeholder='enter'
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <h1 className='ml-30 text-3xl font-bold mt-10'>{text}</h1>
      </div>

    </div>
  )
}

export default App

