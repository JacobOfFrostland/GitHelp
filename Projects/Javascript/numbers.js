function getShuffledArray(myArray) {

    let itemsToShuffle = [...myArray];

    let newArray = [];

    for (let i = 0; i < myArray.length; i++) {
        const randomIndex = Math.floor(itemsToShuffle.length * Math.random());
        const randomItem = itemsToShuffle[randomIndex];
        itemsToShuffle = [
            ...itemsToShuffle.slice(0, randomIndex),
            ...itemsToShuffle.slice(randomIndex + 1, itemsToShuffle.length),
        ];
        
        newArray = [...newArray, randomItem];
    }

    return newArray;
}

console.log(getShuffledArray([1, 2, 3, 4, 5]))