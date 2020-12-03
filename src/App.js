import React from "react";
import "./App.css";

const App = () =>{
  const [count, setCount] = React.useState(100)
  const handleAdd = () => setCount(prevValue => prevValue+5)
  const handleSubtract = () => setCount(prevValue => prevValue-5)
  const [isActive, setIsActive] = React.useState(true)
  const toggleVisibilityCounter = ()=> setIsActive(currentValue=>!currentValue)

  const counterComponent = isActive ? <Counter/> : null

  React.useEffect(()=>alert('useEffect'), [])

  return(
    <>
    <div className='example'>{count}</div>
    <button className='add' onClick={handleSubtract}>-</button>
    <button className='subtract' onClick={handleAdd}>+</button>
    <button className='showHide' onClick={toggleVisibilityCounter}>Show\Hide Mouse Position</button>
    {counterComponent}
    </>
  )
}


const Counter = () => {
  const [counterX, setCounterX] = React.useState(0)
  const [counterY, setCounterY] = React.useState(0)
  const handleMouseMoveX = e => setCounterX(e.clientX)
  const handleMouseMoveY = e => setCounterY(e.clientY)
  React.useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMoveX)
    window.addEventListener('mousemove', handleMouseMoveY)
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveX)
      window.removeEventListener('mousemove', handleMouseMoveY)
    }
  },[]
  );

  return(
    <div className='mouse-position'>
      <p className='mouse-position__values'>{counterX}/{counterY}</p>
      <p className='mouse-position__legend'>Oś X / Oś Y</p>
      {/* <p>{rerenderCounter}</p> */}
    </div>
  )
}
export default App;

