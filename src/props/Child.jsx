import React from 'react'

export const Child = ({name,setName}) => {
    const handleClick=()=>{
        setName("sipun")
    }
  return (
    <div>
        <h3>I am Child {name}</h3>
        <button onClick={handleClick}>Change</button>
    </div>
  )
}
