/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }//????

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

let d6 = document.querySelector("#d6-roll");
d6.src = "images/start/d6.png";

let d6one = document.querySelector("#double-d6-roll-1");
d6one.src = "images/start/d6.png";

let d6two = document.querySelector("#double-d6-roll-2");
d6two.src = "images/start/d6.png";

let d12 = document.querySelector("#d12-roll");
d12.src = "images/start/d12.jpeg";

let d20 = document.querySelector("#d20-roll");
d20.src = "images/start/d20.jpg";

/*******************
 * EVENT LISTENERS *
 *******************/
let restart = document.querySelector("#reset-button");

restart.addEventListener("click", function(){

  sixes.splice(0, sixes.length);   
  doubleSixes.splice(0, doubleSixes.length);
  twelves.splice(0, twelves.length);
  twenties.splice(0, twenties.length);

  d6Mean.innerText = "";
  d6Median.innerText = "";
  d6Mode.innerText = "";
  //console.log(sixes);

  d6twoMean.innerText = "";
  d6twoMedian.innerText = "";
  d6twoMode.innerText = "";

  d12Mean.innerText = "";
  d12Median.innerText = "";
  d12Mode.innerText = "";

  d20Mean.innerText = "";
  d20Median.innerText = "";
  d20Mode.innerText = "";

  d6.src = "images/start/d6.png";
  d6one.src = "images/start/d6.png";
  d6two.src = "images/start/d6.png";
  d12.src = "images/start/d12.jpeg";
  d20.src = "images/start/d20.jpg";

})
//=======================================================================

let d6button = document.querySelector("#d6-button");

let d6Mean = document.querySelector("#d6-rolls-mean");
let d6Median = document.querySelector("#d6-rolls-median");
let d6Mode = document.querySelector("#d6-rolls-mode");

d6button.addEventListener("click", function(){
  let output = getRandomNumber(6);
  
  if (output === 1){
    d6.src = "images/d6/1.png";
  } else if (output === 2){
    d6.src = "images/d6/2.png";
  } else if (output === 3){
    d6.src = "images/d6/3.png";
  } else if (output === 4){
    d6.src = "images/d6/4.png";
  } else if (output === 5){
    d6.src = "images/d6/5.png";
  } else if (output === 6){
    d6.src = "images/d6/6.png";
  }

  sixes.push(output);

  d6Mean.innerText = getMean(sixes);
  d6Median.innerText = getMedian(sixes);
  d6Mode.innerText = getMode(sixes);

  //console.log(sixes);
})


//double dice:
let doubleDice = document.querySelector("#double-d6-buttons");

let d6twoMean = document.querySelector("#double-d6-rolls-mean");
let d6twoMedian = document.querySelector("#double-d6-rolls-median");
let d6twoMode = document.querySelector("#double-d6-rolls-mode");

doubleDice.addEventListener("click", function(){
  let output = getRandomNumber(6);
  let output2 = getRandomNumber(6);
  
  if (output === 1){
    d6one.src = "images/d6/1.png";
  } else if (output === 2){
    d6one.src = "images/d6/2.png";
  } else if (output === 3){
    d6one.src = "images/d6/3.png";
  } else if (output === 4){
    d6one.src = "images/d6/4.png";
  } else if (output === 5){
    d6one.src = "images/d6/5.png";
  } else if (output === 6){
    d6one.src = "images/d6/6.png";
  }

  if (output2 === 1){
    d6two.src = "images/d6/1.png";
  } else if (output2 === 2){
    d6two.src = "images/d6/2.png";
  } else if (output2 === 3){
    d6two.src = "images/d6/3.png";
  } else if (output2 === 4){
    d6two.src = "images/d6/4.png";
  } else if (output2 === 5){
    d6two.src = "images/d6/5.png";
  } else if (output2 === 6){
    d6two.src = "images/d6/6.png";
  }
  

  doubleSixes.push(output);
  doubleSixes.push(output2);

  d6twoMean.innerText = getMean(doubleSixes);
  d6twoMedian.innerText = getMedian(doubleSixes);
  d6twoMode.innerText = getMode(doubleSixes);
  
})

//12 sided dice:
let d12button = document.querySelector("#d12-button");

let d12Mean = document.querySelector("#d12-rolls-mean");
let d12Median = document.querySelector("#d12-rolls-median");
let d12Mode = document.querySelector("#d12-rolls-mode");

d12button.addEventListener("click", function(){
  let output = getRandomNumber(12);
  
  if (output === 1){
    d12.src = "images/numbers/1.png";
  } else if (output === 2){
    d12.src = "images/numbers/2.png";
  } else if (output === 3){
    d12.src = "images/numbers/3.png";
  } else if (output === 4){
    d12.src = "images/numbers/4.png";
  } else if (output === 5){
    d12.src = "images/numbers/5.png";
  } else if (output === 6){
    d12.src = "images/numbers/6.png";
  } else if (output === 7){
    d12.src = "images/numbers/7.png";
  } else if (output === 8){
    d12.src = "images/numbers/8.png";
  } else if (output === 9){
    d12.src = "images/numbers/9.png";
  } else if (output === 10){
    d12.src = "images/numbers/10.png";
  } else if (output === 11){
    d12.src = "images/numbers/11.png";
  } else if (output === 12){
    d12.src = "images/numbers/12.png";
  }

  twelves.push(output);

  d12Mean.innerText = getMean(twelves);
  d12Median.innerText = getMedian(twelves);
  d12Mode.innerText = getMode(twelves);
})


//20 sided dice:
let d20button = document.querySelector("#d20-button");

let d20Mean = document.querySelector("#d20-rolls-mean");
let d20Median = document.querySelector("#d20-rolls-median");
let d20Mode = document.querySelector("#d20-rolls-mode");

d20button.addEventListener("click", function(){
  let output = getRandomNumber(20);
  
  if (output === 1){
    d20.src = "images/numbers/1.png";
  } else if (output === 2){
    d20.src = "images/numbers/2.png";
  } else if (output === 3){
    d20.src = "images/numbers/3.png";
  } else if (output === 4){
    d20.src = "images/numbers/4.png";
  } else if (output === 5){
    d20.src = "images/numbers/5.png";
  } else if (output === 6){
    d20.src = "images/numbers/6.png";
  } else if (output === 7){
    d20.src = "images/numbers/7.png";
  } else if (output === 8){
    d20.src = "images/numbers/8.png";
  } else if (output === 9){
    d20.src = "images/numbers/9.png";
  } else if (output === 10){
    d20.src = "images/numbers/10.png";
  } else if (output === 11){
    d20.src = "images/numbers/11.png";
  } else if (output === 12){
    d20.src = "images/numbers/12.png";
  } else if (output === 13){
    d20.src = "images/numbers/13.png";
  } else if (output === 14){
    d20.src = "images/numbers/14.png";
  } else if (output === 15){
    d20.src = "images/numbers/15.png";
  } else if (output === 16){
    d20.src = "images/numbers/16.png";
  } else if (output === 17){
    d20.src = "images/numbers/17.png";
  } else if (output === 18){
    d20.src = "images/numbers/18.png";
  } else if (output === 19){
    d20.src = "images/numbers/19.png";
  } else if (output === 20){
    d20.src = "images/numbers/20.png";
  }

  twenties.push(output);

  d20Mean.innerText = getMean(twenties);
  d20Median.innerText = getMedian(twenties);
  d20Mode.innerText = getMode(twenties);
})

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

function getMean(array){
  let sum = 0;

  for (let elements of array){
    sum += elements;
  }
  
  return (sum/array.length).toFixed(2)
}

function getMedian(array){
  if (array.length === 0){
    return 0;
  }

  let sorted = sortByNumber(array);
  //need to sort out array from least to most to find the median

  if (sorted.length % 2 === 0){
    //array is even
    let middleHigh = sorted.length/2;
    let middleLow = (sorted.length/2) -1;
    let ans = (sorted[middleHigh] + sorted[middleLow])/2;
    return ans;
  } else {
    //array is odd
    let middleIndex = Math.floor(sorted.length/2);
    return sorted[middleIndex];
  }
  
}

function getMode(array){
  //create object:

  let countObject = {};

  /*
  if [2, 3, 3, 4, 6]
   countObject = {
     2 : 1
     3 : 2
     4 : 1
     6 : 1
   }
  */

   //create keys for each number in the array:
   for (let number of array){
     if (countObject[number] >= 1){
        countObject[number]++;
     } else {
        countObject[number] = 1;
     }//use bracket syntax instead of dot syntax to interpret and find the number (rather than dot syntax which would look for a key called "number")
   }

   //return key with hightest count
   let highestUniqueNumber = 0;
   let highestCount = 0;
   let keys = Object.keys(countObject); //returns a string array of each key in the object that we passed in

   for (let number of keys){
     let value = countObject[number];

     if (value > highestCount){
       highestCount = value;
       highestUniqueNumber = number;
     }
   }

   return highestUniqueNumber;
}