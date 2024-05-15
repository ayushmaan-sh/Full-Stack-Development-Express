import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
     <h1 className='w-full h-screen duration-200 text-white'
     style={{backgroundColor: color}}
     ></h1>

     <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-12'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

        {/* Red Button */}
        <button
        onClick={()=>setColor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>

        {/* Black Button */}
        <button
        onClick={()=>setColor("black")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>

        {/* Yellow Button */}
        <button
        onClick={()=>setColor("yellow")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>

        {/* Green Buttton */}
        <button
        onClick={()=>setColor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>

        {/* Blue Button */}
        <button
        onClick={()=>setColor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>

        {/* Brown Button */}
        <button
        onClick={()=>setColor("brown")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"brown"}}>Brown</button>

        {/* Purple Button */}
        <button
        onClick={()=>setColor("purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>

        {/* Lavender Button */}
        <button
        onClick={()=>setColor("lavender")}
        className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"Lavender"}}>Lavender</button>
      </div>
     </div>
    </>
  )
}
export default App
