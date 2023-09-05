import React from 'react'

export const Child = ({updateCount,count}) => {
  return (
    <div>
      <button onClick={()=>updateCount(count+1)}>Increment</button>
    </div>
  )
}
