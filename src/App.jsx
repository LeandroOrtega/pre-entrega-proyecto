import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import CartWidget from '../components/CartWidget/CartWidget'

function App() {

  return (
    <>
      <Navbar/>
  
    <h1>La Casa De River Plate</h1>
  
    <ItemListContainer/>
    </>
  )
}

export default App
