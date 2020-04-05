// @ Developed by Anton Burchak
// See my LinkedIn profile  :: ///
// View my github portfolio ::
// 1/324


const chunk = (array = [], size = 1) => { // Success
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

// console.log(chunk(['a', 'b', 'c', 'd', 22, 224], 2))


