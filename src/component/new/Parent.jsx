import React from 'react'
import { Child } from './Child'
import { Child1 } from './Child1'
import {useState} from "react"
const Parent = () => {
  const[count,setCount]=useState(0);
  const updateCount=(newCount)=>{
      setCount(newCount)
  }
  return (
    <div>
      count={count}
      <div>
        <Child updateCount={updateCount} count={count}></Child>
        <Child1 updateCount={updateCount} count={count}></Child1>
      </div>
    </div>
  )
}

export default Parent