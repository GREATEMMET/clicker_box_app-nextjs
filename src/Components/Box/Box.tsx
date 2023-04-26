import React from 'react'

export default function Box(props:any) {
    let styles = {
        backgroundColor: props.isFilled? "#ffffffc9" : "transparent"
    }
  return (
    <div className={`h-[100px] w-[100px] border-2 rounded-xl`} style={styles} onClick={()=>props.boxClicker(props.id)}></div>
  )
}
