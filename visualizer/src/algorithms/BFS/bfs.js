import { Queue } from "./queue";
import { markVisited } from "../../store/visualizerSlice";

export const bfs = (grid,start,end,dispatch)=>{
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    const startRow = start[0];
    const startCol = start[1];
    //queue - data structure
    const queue = new Queue();

    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const parent = Array.from({ length: rows }, () => Array(cols).fill(null));

    queue.push(grid[startRow][startCol]);

    parent[start[0]][start[1]]=[start[0],start[1]];
    visited[start[0]][start[1]]=true;


    while (!queue.isEmpty()) {
        const currentNode = queue.peek(); 
        queue.pop();

        if (currentNode === null) {
            return -1; // No path exists
        }

        const currentRow = currentNode.row;
        const currentCol = currentNode.col;
        // const isWall = currentNode.isWall;
        // const isStart=currentNode.isStart;
        const isEnd = currentNode.isEnd;

        if (isEnd) {
            console.log(parent)
            return {minDist:[],parentArr:parent}; // Found the shortest path to the destination
        }
  
        dispatch(markVisited([currentRow,currentCol]))

        for (const [dRow, dCol] of directions) {
            const newRow = currentRow + dRow;
            const newCol = currentCol + dCol;
            // grid[newRow][newCol] === 0 means no wall
            if ((newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) && grid[newRow][newCol].isWall!=true && !visited[newRow][newCol])
            {
                    visited[newRow][newCol] = true;
                    parent[newRow][newCol]=[currentRow,currentCol];
                    queue.push(grid[newRow][newCol]);
            }
        }
    }
}