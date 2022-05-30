// Problem 417 - Medium

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
// => cho 1 mảng thể hiện cho độ cao của 1 vùng đất so với mặt nước biển đại tây dương và thái bình dương
//    tìm mảng các vị trị trên vùng đất đó mà nước mưa có thể chảy từ đó tới cả 2 vùng biển
//    thái bình dương ở góc trên bên trái và đại tây dương ở góc dưới bên phải của vùng đất

// Idea:
// - vì vị trí của 2 đại dương nên ta xét 2 cột trên cùng và dưới cùng, hàng trong cùng và ngoài cùng  
// - sau đó ta dfs qua 2 lần lặp:
//     + lặp trên 2 cột trên cùng và dưới cùng => tìm được cac vị trí nước có thể chảy đến hàng trên và dưới để ra 2 đại dương
//     + lặp trên 2 hàng trong cùng và ngoài cùng => tìm được cac vị trí nước có thể chảy đến cột trong và ngoài để ra 2 đại dương
// - những điểm nc có thể chảy đến tbd cho vào mảng pcf , đại tây dương là atl 
//   => nhuững điểm thuộc cả 2 mảng này sẽ thỏa mãn 
//      2 mảng atl và pcf còn giúp tránh dfs thừa những điểm đã thỏa mãn
//      => độ phức tạp thời gian là O(m*n) (lặp mỗi cột và hàng mất max là m*n phép tính => max 4*m*n) và độ phức tạp không gian là O(m*n)  

var pacificAtlantic = function(heights) {
    let rows = heights.length 
    let cols = heights[0].length 
    let atl = Array(rows).fill().map(() => Array(cols).fill(false))
    let pcf = Array(rows).fill().map(() => Array(cols).fill(false))
    let res = []
   
    dfs = function(r,c,visit,prevHeight){
        if( r<0 || r>=rows || c<0 || c>=cols || heights[r][c]<prevHeight || visit[r][c] ) return
        
        visit[r][c] = true
        dfs(r,c+1,visit,heights[r][c])
        dfs(r,c-1,visit,heights[r][c])
        dfs(r+1,c,visit,heights[r][c])
        dfs(r-1,c,visit,heights[r][c])
    }

    for(let i=0 ;i<cols; i++){
        dfs(0,i,pcf,heights[0][i])
        dfs(rows-1,i,atl,heights[rows-1][i]) 
    }

    for(let i=0 ;i<rows; i++){
        dfs(i,0,pcf,heights[i][0])
        dfs(i,cols-1,atl,heights[i][cols-1]) 
    }

    for(let i=0 ;i<rows; i++){
        for(let j=0; j<cols; j++){
            if( pcf[i][j] && atl[i][j]  ){
                res.push([i,j]);
            }
        }
    }

    return res

};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))