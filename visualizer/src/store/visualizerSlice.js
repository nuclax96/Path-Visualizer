import { createSlice } from "@reduxjs/toolkit";

const createNode=(row,col)=>{
    return {
        row,
        col,
        isStart:row==0 && col==0,
        isEnd:row==19 && col==49,
        isWall:false,
        isPath:false,
    }
}

const initializeGrid=(nrow,ncol)=>{
        
    const rows = [];
    for(let i=0;i<nrow;i++)
    {
        const row=[];
        for(let j=0;j<ncol;j++)
        {
            row.push(createNode(i,j));
        }
        rows.push(row);
    }

    return rows;
}

const initialState = {
    setupPhase:null,
    reset:false,
    grid:initializeGrid(20,50),
    startNode: {row:0,col:0},
    endNode:{row:19,col:49},
    wall:initializeGrid(20,50),
}

const visualizerSlice = createSlice(
   {
        name:'visualizer',
        initialState:initialState,
        reducers:{
            setSetupPhase: (state,action)=>{
                const type = action.payload;

                switch(type)
                {
                    case 'select/start':
                        state.setupPhase='start'
                        break;
                    case 'select/end':
                        state.setupPhase='end';
                        break;
                    case 'select/wall':
                        state.setupPhase='wall'
                        break;
                    default:
                        state.setupPhase='start'
                }
            },
            setReset: (state,action)=>{
                state.setupPhase=false;
            },
            setStartNode: (state,action)=>{
                if(state.setupPhase!='start') return;

                const row = action.payload.row;
                const col = action.payload.col;
                if(state.startNode)
                {
                    const node = state.startNode;
                    state.grid[node.row][node.col].isStart=false;
                }
                state.startNode=action.payload;
                state.grid[row][col].isStart=true;
            },
            setEndNode: (state,action)=>{
                if(state.setupPhase!='end') return;
                const row = action.payload.row;
                const col = action.payload.col;
                if(state.endNode)
                {
                    const node = state.endNode;
                    state.grid[node.row][node.col].isEnd=false;
                }
                state.endNode=action.payload;
                state.grid[row][col].isEnd=true;
            },
            setWalls: (state,action)=>{
                if(state.setupPhase!='wall') return;
                const row = action.payload.row;
                const col = action.payload.col;

                if(!state.setupPhase) return;
                if(state.grid[row][col].isStart || state.grid[row][col].isEnd) return;
                
                const currWallStatus = state.grid[row][col].isWall;
                state.grid[row][col].isWall=!currWallStatus;
            },

            resetGrid:(state,action)=>{
                state.startNode={row:0,col:0};
                state.endNode={row:19,col:49};
                state.setupPhase=false;
                for(let i=0;i<20;i++)
                {
                    for(let j=0;j<50;j++)
                    {
                        state.grid[i][j].isWall=false;
                        state.grid[i][j].isStart=false;
                        state.grid[i][j].isEnd=false;
                        state.grid[i][j].isPath=false
                    }
                }

                state.grid[0][0].isStart=true;
                state.grid[19][49].isEnd=true;
            },
            setPath:(state,action)=>{
                const path=action.payload;
                
                for(let i=0;i<path.length;i++)
                {
                    const [row,col] = path[i];
                    
                    state.grid[row][col].isPath=true;
                }
            }
        }
    }
)

export const {setSetupPhase,setEndNode,setStartNode,setWalls,setReset,resetGrid,setPath} = visualizerSlice.actions ;
export default visualizerSlice.reducer;