import React from 'react'
import { useSelector } from 'react-redux';
const Node = ({uniqueId,isStart,isEnd,isWall,nodeClickHandler,row,col}) => {
    const nodeType = isStart?'node-start':isEnd?'node-end':isWall?'node-wall':'';
    
  return (
    <div onClick={()=>{
        nodeClickHandler(row,col)
    }} data-id={uniqueId} className={`node ${nodeType}`}></div>
  )
}

export default Node