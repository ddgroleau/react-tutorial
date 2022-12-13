import React, { useContext } from 'react'
import { TutorialContext } from './App'

const CountComponent = () => {
  const count = useContext(TutorialContext);
  
  return (
    <span>{count}</span>
  )
}

export default CountComponent;