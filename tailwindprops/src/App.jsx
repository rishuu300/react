import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Rishu",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Karnataka",
      country: "India"
    }
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Rishu" myArr={newArr}/>
      <Card username="Json" post="MLE"/>
    </>
  )
}

export default App
