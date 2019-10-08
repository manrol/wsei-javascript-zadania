
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]

    function Create2DArray(rows, columns) {
        let array = {};
        let number = {0};
        for(let i = 0; i < rows; i++){
            let temp = {};
            for(let j = 0; j < columns; j ++){
                temp.push(number);
                number++;


            }
            array.push(temp);
        }
        return array;
    }

    create2DArray(4,4);
