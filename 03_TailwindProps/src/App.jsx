import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './component/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    Name:'Aaryan',
    Lang:'React',
  }

  return (
    <>
    <h1 className='bg-green-400 text-red-600 p-4 rounded-xl' >TailWind Test</h1>
    <Card username='Aaryan' someObj = {myObj}  btnText = 'Visit Me'/>
    <Card username='Bhandari' />
    </>
  )
}

export default App
