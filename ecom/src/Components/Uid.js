import { CheckBox } from '@mui/icons-material'
import React, { useId } from 'react'

function check() {
   
}
function Uid() {
    const id=useId('')
    console.log(id);
  return (
    <div>
      <label htmlFor={id}>Select</label>
      <input id={id} type='checkbox'></input>
    </div>
  )
}

export default Uid
