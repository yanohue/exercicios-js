var goodSudoku1 = ([
    [1,4, 2,3],
    [3,2, 4,1],

    [4,1, 3,2],
    [2,3, 1,4]
]);

var goodSudoku2 = ([
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],
  
    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],
  
    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,4]
]);

var badSudoku1 = ([
    [1,4, 2,3],
    [3,2, 4,1],

    [4,1, 3,2],
    [2,3, 1,1]
]);

var badSudoku2 = ([
    [7,8,4, 1,5,9, 3,2,6],
    [5,3,9, 6,7,2, 8,4,1],
    [6,1,2, 4,3,8, 7,5,9],
  
    [9,2,8, 7,1,5, 4,6,3],
    [3,5,7, 8,4,6, 1,9,2],
    [4,6,1, 9,2,3, 5,8,7],
  
    [8,7,6, 3,9,4, 2,1,5],
    [2,4,3, 5,6,1, 9,7,8],
    [1,9,5, 2,8,7, 6,3,1]
]);

var repeatedSudoku = ([
    [1,2, 3,4],
    [2,3, 4,1],

    [4,1, 2,3],
    [3,4, 1,2]
]);


function stringifyRow(sudoku) {
    let sudokuRows = "";
    let sudokuArray = []

    for(let row = 0; row < sudoku.length; row++) {
        for (let column = 0; column < sudoku.length; column++) {
            sudokuArray.push(sudoku[row][column]);
        }
    }
    sudokuRows = sudokuArray.join("");
    console.log(sudokuRows);

    return sudokuRows;
}

function stringifyCol(sudoku) {   
    let sudokuCols = "";
    let sudokuArray = []

    for(let column = 0; column < sudoku.length; column++) {
        for (let row = 0; row < sudoku.length; row++) {
            sudokuArray.push(sudoku[row][column]);
        }
    }
    sudokuCols = sudokuArray.join("");
    console.log(sudokuCols);
     
    return sudokuCols;
}

function validateRowCols(sudokuRows, sudokuCols) {
    for(let i = 0; i < size; i++) {
        let row = sudokuRows.slice(size * i, size * (i + 1));
        let col = sudokuCols.slice(size * i, size * (i + 1));
    
        if(row.match(/(\d)(\d)*\1/g) || col.match(/(\d)(\d)*\1/g)) {
            console.log("invalid");
            return false;
        } else {
            console.log("valid");
            return true;
        }
    }
}


// stringify sudoku by subsquares
var startRow = 
var startCol

/* 
// green
stringfiedSudoku[0][0];
stringfiedSudoku[0][1];
stringfiedSudoku[1][0];
stringfiedSudoku[1][1];

// yellow
stringfiedSudoku[0][2];
stringfiedSudoku[0][3];
stringfiedSudoku[1][2];
stringfiedSudoku[1][3];

// orange
stringfiedSudoku[2][0];
stringfiedSudoku[2][1];
stringfiedSudoku[3][0];
stringfiedSudoku[3][1];

// red
stringfiedSudoku[2][2];
stringfiedSudoku[2][3];
stringfiedSudoku[3][2];
stringfiedSudoku[3][3]; 
*/