import React from 'react'
import { useState } from 'react'
import Node from './node';
import {useSelector,useDispatch} from 'react-redux'
import { setStartNode ,setEndNode,setWalls} from '../store/visualizerSlice';

const Grid = ({nrow,ncol}) => {
    const dispatch = useDispatch();
    const grid = useSelector((state)=>state.visualizer.grid);
    const startNode = useSelector((state)=>state.visualizer.startNode);
    const endNode = useSelector((state)=>state.visualizer.endNode);
    const wall = useSelector((state)=>state.visualizer.wall);
    const currentPhase = useSelector((state)=>state.visualizer.setupPhase)
    const nodeClickHandler = (row , col)=>
    {
      
        if(currentPhase =="start")
        {
            console.log("in Start")
            dispatch(setStartNode({row,col}));      
        }else if(currentPhase =="end")
        {
            console.log("in end");
            dispatch(setEndNode({row,col}));
        }else{
          dispatch(setWalls({row,col}))
        }
    }
    const generateNodes=()=>{
        return (
            <div className="grid">
              {grid.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((node, nodeIndex) => {
                    const uniqueId = `${rowIndex}-${nodeIndex}`;
                    // console.log(node.isStart)
                    return (
                      <Node
                        key={uniqueId}
                        nodeClickHandler={nodeClickHandler}
                        row = {rowIndex}
                        col= {nodeIndex}
                        uniqueId = {uniqueId}
                        isStart={node.isStart}
                        isEnd={node.isEnd}
                        isWall={node.isWall}
                        isPath = {node.isPath}
                        isVisited={node.isVisited}
                      />
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          );          
    }


  return (

          <>{generateNodes()}</>
       
  )
}

export default Grid