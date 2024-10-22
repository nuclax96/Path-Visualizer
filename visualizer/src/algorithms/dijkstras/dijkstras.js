
export const dijkstras = (grid,start, end)=>{
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    const distance = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const parent = Array.from({ length: rows }, () => Array(cols).fill(null));
   

    distance[start[0]][start[1]]=0;
    parent[start[0]][start[1]]=[start[0],start[1]];

    function findMinDistance() {
        let minDist = Infinity;
        let minNode = null;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (!visited[r][c] && distance[r][c] < minDist) {
                    minDist = distance[r][c];
                    // minNode = [r, c];
                    minNode = grid[r][c];
                }
            }
        }

        return minNode;
    }

    while (true) {
        const currentNode = findMinDistance();  // this works like the priority_queue , just the complexity will be O(N) istead of logn for min heap

        if (currentNode === null) {
            return -1; // No path exists
        }
        const currentRow = currentNode.row;
        const currentCol = currentNode.col;
        const isWall = currentNode.isWall;
        const isStart=currentNode.isStart;
        const isEnd = currentNode.isEnd;

        if (isEnd) {
            console.log(parent)
            return {minDist:distance[currentRow][currentCol],parentArr:parent}; // Found the shortest path to the destination
        }
  

        visited[currentRow][currentCol] = true;

        for (const [dRow, dCol] of directions) {
            const newRow = currentRow + dRow;
            const newCol = currentCol + dCol;
            // grid[newRow][newCol] === 0 means no wall
            if ((newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) && !isWall && !visited[newRow][newCol])
            {
                const newDist = distance[currentRow][currentCol] + 1;
                
                if (newDist < distance[newRow][newCol]) {
                    parent[newRow][newCol]=[currentRow,currentCol];
                    distance[newRow][newCol] = newDist;
                }
            }
        }
    }

    
}