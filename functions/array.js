
/*
    @ Developed by Anton Burchak
    Own Lodash implementation
    Lodash version: https://lodash.com/docs/4.17.15
    See my LinkedIn profile  :: https://www.linkedin.com/in/antonburchak/
    View my github portfolio :: https://github.com/AntonBurchak

    Progress:
    1/324 Solved

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
// console.log(chunk(['a', 'b', 'c', 'd', 22, 224], 2))


const compact = (array) => {
    const config = [false, null, 0, "", undefined, NaN] // falsey types
    return array.filter(element => config.indexOf(element) == -1 ? true : false);
}
// Input:  [0, 1, false, 2, '', 3]
// Output: [ 1, 2, 3 ]
// console.log(compact([0, 1, false, 2, '', 3]))