import React, { useEffect, useState } from 'react'

function Time() {
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
     var timmer=setInterval(()=>{
        setTime(new Date(),1000)
     })
     return function cleanup(){
        clearInterval(timmer)
     }
    })
  return (
    <div>
      <p>Time:{time.toLocaleTimeString()}</p>
      <p>Date:{time.toLocaleDateString()}</p>
    </div>
  )
}

export default Time
