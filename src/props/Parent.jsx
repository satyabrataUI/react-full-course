import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    
  return (
    <div>
        <h2>I am Parent</h2>
        <Child name={first} setName={setFirst}/>
    </div>
  )
}
