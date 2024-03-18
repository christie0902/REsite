import React, { useEffect } from 'react'
import CanvasModel from "../../canvas"
import Customizer from "./Customizer"
import Intro from "./Home"

const CustomizerSection = () => {
useEffect(() => {
  window.scrollTo(0,0)
}, [])


  return (
    <main className="app transition-all ease-in">
        <Intro />
        <CanvasModel />
        <Customizer />
    </main>
  )
}

export default CustomizerSection