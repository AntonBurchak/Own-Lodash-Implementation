
/*
    @ Developed by Anton Burchak
    Own Lodash implementation
    Lodash version: https://lodash.com/docs/4.17.15
    See my LinkedIn profile  :: https://www.linkedin.com/in/antonburchak/
    View my github portfolio :: https://github.com/AntonBurchak

    Progress:
    4/324 Solved

    last update: 05.04.2020

    READ: This .js file has inside only array functions
*/







// [X] Solved
const chunk = (array = [], size = 1) => { 
    if (array instanceof Array && !isNaN(+size)) {
        const result_array = [];
        let   temp_array = [];
        if (size === 1) return array;

        array.forEach((element, index) => {
            temp_array.push(element);
            if ((index + 1) % size == 0) {
                result_array.push(temp_array); 
                temp_array = [];
            };
        });
        
        if (temp_array.length == 0) return [...result_array, ...temp_array];
        else                        return [...result_array, temp_array];
        
    } else {
        throw new Error('Invalid arguments types');
    }
}
// Input:  ['a', 'b', 'c', 'd', 22, 224], 2
// Output: [ [ 'a', 'b' ], [ 'c', 'd' ], [ 22, 224 ] ]


// [X] Solved
const compact = (array) => {
    const config = [false, null, 0, "", undefined, NaN] // falsey types
    return array.filter(element => config.indexOf(element) == -1 ? true : false);
}
// Input:  [0, 1, false, 2, '', 3]
// Output: [ 1, 2, 3 ]


// [X] Solved
function concat()  {
    const args = Array.from(arguments);
    const temp = args[0];
    // console.log(args);
    for (let i = 1; i < args.length; i++) {
        if(typeof args[i] === 'object' && args[0] !== undefined) { 
            temp.push(...args[i]);
        } else {
            temp.push(args[i]);
        }
        
    }
    return temp
}
// Input:  [1,2,3], 2, [3], [[4]]
// Output: [ 1, 2, 3, 4, 5, [ 6 ] ]

// [X] Solved
const difference = (inspect_array, exclude_array) => {
    return inspect_array.filter(element => {
        return !exclude_array.some(item => item == element);
    });
}
// Input:  [2, 3, 19, 21, 4], [2, 3, 99, 19, 21]
// Output: [4]

// [2, 1] [2, 3] => [1]
console.log(difference([2, 3, 19, 21, 4], [2, 3, 99, 19, 21]))