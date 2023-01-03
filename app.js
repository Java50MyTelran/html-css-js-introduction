// const ar = [] ;
// const ar1 = [1,2,3,4,]
// ar.push(...ar1);
// ar.push('abc');
function getRandomNumber(min, max) {
   
    return min + Math.trunc(Math.random() * (max - min + 1));
}
function getRandomMatrix(rows, columns, min, max){
    const matrix = [];
    for(let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < columns; j++) {
            matrix[i].push(getRandomNumber(min, max))
        }
    }
    return matrix;
}
//const matrix = getRandomMatrix(3, 4, 0, 1);
const ar10 = [1,2,3,4,5];
const str =ar10.join('_');

//HTML
//<ul class="list_class">
//  <li class="item_class">
//     <div class="white"> </div>
//  </li>
// .............
//<li class="item_class">
//     <div class="black"> </div>
//  </li>
//</ul>
function getHtmlUl(array) {
   
    return `<ul class="list_class">
      ${getListItems(array)}
      </ul>`;
}
function getListItems(array) {
    const res = [];
    for(let i = 0; i < array.length; i++) {
        res[i] = `
                <li class="item_class">
                    <div class="${array[i] === 0 ? "white" : "black"}">
                     </div>
                 </li>`
    }
    return res.join('');
}
const strClass = getRandomNumber(0, 1) === 0 ? 'white' : 'black';
const str1 = "hello world";
const str2 = 'hello ' + '"world"';
const str3 = `class="${strClass}"`;
function matrixTransp(matrix) {
    //TODO
    //returns transp matrix
    // matrix = [[1, 2], //input
    //           [3, 4], 
    //           [4, 5]        
    //            ]
    //  output   [1, 3, 4]
    //           [2, 4, 5] 
    const res =[];
    for(let i = 0; i < matrix[0].length; i++){
        res[i] = [];
        for(let j = 0; j < matrix.length; j++) {
            res[i][j] = matrix[j][i];
        }
    }
    return res;
}
const matrix = [[1, 2], 
              [3, 4], 
              [4, 5]        
               ];
//console.log(matrixTransp(matrix));
console.log(getHtmlUl([0,1,1,0,0]))
