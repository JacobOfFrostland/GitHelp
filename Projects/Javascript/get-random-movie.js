function getRandomMovie() {

    const myArray = [
        'Jaws',
        'Halloween',
        'Shrek',
        'Alien',
        'Avengers',
    ];

    const randomNumber = getRandomIndexOfArray(myArray);

    return myArray[randomNumber];
}

function getRandomIndexOfArray(myArray) {
    // get random number from math.random (0 to 1)
    const randomNumber = Math.random();
    // multiply that number by array.length
    const product = myArray.length * randomNumber;
}