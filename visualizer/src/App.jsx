import React from "react";
import Grid from "./components/Grid";
import './App.css'; // Make sure the path is correct
import Button from "./components/Button";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {setSetupPhase,setReset,resetGrid,setPath} from './store/visualizerSlice'
import { dijkstras } from "./algorithms/dijkstras/dijkstras";
import { findPath } from "./algorithms/dijkstras/findPath";

const App = ()=>{
  const dispatch = useDispatch();
  const setupPhase = useSelector((state)=>state.visualizer.setupPhase)
  const grid = useSelector((state)=> state.visualizer.grid)
  const startNode = useSelector((state)=>state.visualizer.startNode);
  const endNode = useSelector((state)=>state.visualizer.endNode);

  const startOnClickHandler=()=>{
    dispatch(setSetupPhase('select/start'));
  }
  const resetOnClickHandler=()=>{
    dispatch(resetGrid());
    // dispatch(setReset());
  }

  const selectStartBtnHandler = ()=>{
    dispatch(setSetupPhase('select/start'));
  }
  const selectEndBtnHandler = ()=>{
    dispatch(setSetupPhase('select/end'));
  }
  const selectWallBtnHandler = ()=>{
    dispatch(setSetupPhase('select/wall'));
  }

  const findPathBtnHandler = ()=>{
    const returnedArr=dijkstras(grid,[startNode.row,startNode.col],[endNode.row,endNode.col]);
    const path = findPath([startNode.row,startNode.col],[endNode.row,endNode.col],returnedArr.parentArr)
    if(returnedArr.minDist!=-1)
    {

      dispatch(setPath(path));
    }  
    
  }

  return (<>
  <div className="app-container">
  <div className="control-buttons">
      <Button onClick = {startOnClickHandler} className= {'btn btn-start'} >Start</Button>
      <Button onClick={resetOnClickHandler} className= {'btn btn-start'} >Reset</Button>
    </div>
    <Grid ncol={50} nrow={20}></Grid>
    <div className={`control-buttons ${!setupPhase?'hidden':''}`}>
      <Button onClick ={selectStartBtnHandler} className= {`btn ${setupPhase=='start'?'btn-selected':''}` } >Select Start Node</Button>
      <Button onClick ={selectEndBtnHandler} className= {`btn btn-start ${setupPhase=='end'?'btn-selected':''}`} >Select End Node</Button>
      <Button onClick ={selectWallBtnHandler} className= {`btn btn-start ${setupPhase=='wall'?'btn-selected':''}`} >Select Walls</Button>
    </div>

    <div className={`control-buttons ${!setupPhase?'hidden':''}`}>
        <Button onClick ={findPathBtnHandler} className= {'btn btn-start'} >Find Path</Button>

    </div>
  </div>
  </>)
}
export default App;