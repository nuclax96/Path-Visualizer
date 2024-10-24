import React from 'react'
import { useSelector } from 'react-redux';
const Node = ({uniqueId,isStart,isEnd,isWall,nodeClickHandler,isPath,row,col,isVisited}) => {
    const nodeType = isStart?'node-start':isEnd?'node-end':isWall?'node-wall':'';
    const classPath = isPath?'node-path':''
    let classVisited="";
    if(!isPath && !isStart && !isEnd)
    {

       classVisited = isVisited?'visited':'';
    }
  return (
    <div onClick={()=>{
        nodeClickHandler(row,col)
    }} data-id={uniqueId} className={`node ${nodeType} ${classPath} ${classVisited}`}></div>
  )
}

export default Node