export const findPath = (start,end,parentArr)=>{

    let [endRow, endCol] = end;
    let [startRow, startCol] = start;
    const path = [];
    
    let tempRow =endRow;
    let tempCol = endCol;
    
    while(true)
    {
        if(tempRow==startRow && tempCol==startCol)
        {
            path.push([tempRow,tempCol])
            return path;
        }
        path.push([tempRow,tempCol]);
        const temp = parentArr[tempRow][tempCol];
        [tempRow,tempCol] = temp;
    }
}