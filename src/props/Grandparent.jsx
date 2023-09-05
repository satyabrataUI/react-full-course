import React from 'react'
import { Parent } from './Parent'

export const Grandparent = () => {
  return (
    <div>
        <h1>I am Grand Parent</h1>
        <Parent/>
    </div>
  )
}
