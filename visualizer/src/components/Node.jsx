import React from 'react'
import { useSelector } from 'react-redux';
const Node = ({uniqueId,isStart,isEnd,isWall,nodeClickHandler,isPath,row,col}) => {
    const nodeType = isStart?'node-start':isEnd?'node-end':isWall?'node-wall':'';
    const classPath = isPath?'node-path':''
  return (
    <div onClick={()=>{
        nodeClickHandler(row,col)
    }} data-id={uniqueId} className={`node ${nodeType} ${classPath}`}></div>
  )
}

export default Node