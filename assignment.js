// 1
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please provide a valid number.";
    } else{
        const cube = Math.pow(number, 3);
        return cube;
    }
}
console.log(cubeNumber(2));

// 2
function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please provide a valid string.";
    } else{
        const match = string1.includes(string2);
        return match;
    }
}
console.log(matchFinder("I am a good person", "good"));


// 3
function sortMaker(arr) {
  if (arr.length !== 2) {
    return "Invalid Input";
  }
  const number1 = arr[0];
  const number2 = arr[1];

  if (number1 === number2) {
    return "equal";
  } else if ( typeof number1 !== "number" || typeof number2 !== "number" || number1 < 0 ||     number2 < 0) {
    return "Invalid Input";
  } else {
    const max = Math.max(number1, number2);
    const min = Math.min(number1, number2);
    const sort = [max, min];
    return sort;
  }
}
console.log(sortMaker([4, 9]));

// 4
function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input";
    } else {
        const street = obj.street ||'__' ;
        const house = obj.house || '__';
        const society = obj.society || '__';

        const address = street + ", " + house + ", " + society;
        return address;
    }
}
console.log(findAddress({street: "Road 1", house: 10, society: "ABC"}));

// 5
function canPay(changeArray, totalDue) {
    let totalChipsPrice = 0;
    if (changeArray.length === 0) {
        return "Please input valid array.";
    } else {
        // for (let i = 0; i < changeArray.length; i++) {
        //     totalChipsPrice += changeArray[i];
        // }
        for (let chipsPrice of changeArray) {
            totalChipsPrice += chipsPrice;
        }
        if(totalChipsPrice >= totalDue){
            return true;
        } else{
            return false;
        }
    }
}
console.log(canPay([10, 20, 30], 50));

