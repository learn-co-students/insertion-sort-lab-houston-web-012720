function findMinAndRemove(array) {
    let min = array[0]
    let minIdx = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minIdx = i
        }
    }
    array.splice(minIdx, 1)
    return min
}

function selectionSort(array) {
    let sortedArr = []
    // Use a "while" loop here because a "for" loop functionally increments count twice each cycle, instead of once. Increments first by reducing array length in findMinAndRemove. Increments second from the ++ portion of the loop counter
    while (array.length > 0) {
        sortedArr.push(findMinAndRemove(array))
    }
    return sortedArr
}