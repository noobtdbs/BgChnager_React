import {useState} from 'react'

function App() {
  const [color, setColor] = useState('black')
  const [secondaryColor,setSecondaryColor] = useState('white')

  function bgcolorChanger(color){
    setColor(color)
  }
  function textColorChanger(color){
    setSecondaryColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-10
      py-8 rounded-3xl mt-10 duration-200' style={{backgroundColor: color}}>
        <h1 className='font-extrabold  text-white text-5xl' style={{color: secondaryColor}}>Background Changer</h1>
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3
         py-2 rounded-3xl'>

          <button onClick={()=>{
            setColor('red');
            setSecondaryColor('yellow')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'red'}}>Red</button>

          <button onClick={()=>{
            setColor('green');
            setSecondaryColor('orange')
          }} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'green'}}>Green</button>

          <button onClick={()=>{
            setColor('blue');
            setSecondaryColor('white')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'blue'}}>Blue</button>

          <button onClick={()=>{
            setColor('olive');
            setSecondaryColor('white')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'olive'}}>Olive</button>

          <button onClick={()=>{
            setColor('gray');
            setSecondaryColor('black')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'gray'}}>Gray</button>

          <button onClick={()=>{
            setColor('yellow');
            setSecondaryColor('black')
          }}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'yellow'}}>Yellow</button>

          <button onClick={()=>{
            setColor('pink');
            setSecondaryColor('gray')
          }}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'pink'}}>Pink</button>

          <button onClick={()=>{
            setColor('purple');
            setSecondaryColor('black')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'purple'}}>Purple</button>

          <button onClick={()=>{
            setColor('lavender');
            setSecondaryColor('black')
          }}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'lavender'}}>Lavender</button>

          <button onClick={()=>{
            setColor('white');
            setSecondaryColor('black')
          }}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: 'white'}}>White</button>

          <button onClick={()=>{
            setColor('black');
            setSecondaryColor('yellow')
          }}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: 'black'}}>Black</button>
         </div>
      </div>
    </div>
  )
}

export default App
