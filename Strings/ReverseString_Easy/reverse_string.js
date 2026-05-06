
function reverseString(originalString){

    let reversedString = '';

    for(let i = 0; i < originalString.length; i++){

        reversedString = originalString[i] + reversedString;

    }

    return reversedString;
}

console.log(reverseString('cat'));

console.log(reverseString('Ladder'));
