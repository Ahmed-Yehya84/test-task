const data = require("./data.json");

let animals = data.map((item) => {
  return item.type;
});

const task11Result = (animals) => {
  let result = {};
  let dog = 0;
  let cat = 0;
  let avgage = 0;

  dog = animals.filter(({ type }) => type === "dog").length;
  result.dog = dog;

  cat = animals.filter(({ type }) => type === "cat").length;
  result.cat = cat;

  avgage =
    animals.reduce((total, next) => total + next.age, 0) / animals.length;
  result.avgage = avgage;

  return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
  let result = 0;
  let pureBlack = [];
  // your code here
  pureBlack = animals.filter((element) => {
    return element.breed === true && element.features[0] === "black";
  });
  result = pureBlack.length;

  return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
  let result = [];
  let blackCats = {};
  let whiteDogs = {};

  // your code here

  blackCats = animals.filter((element) => {
    return element.type === "cat" && element.features[0] === "black";
  });

  whiteDogs = animals.filter((element) => {
    return element.type === "dog" && element.features[0] === "white";
  });

  result.push(blackCats, whiteDogs);

  return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
  const result = [];
  let allCats = {};
  let allDogs = {};
  // your code here
  allCats = animals.filter((element) => {
    return element.type === "cat";
  });

  let sortedCats = allCats.sort((a, b) => {
    return b.age - a.age;
  });

  allDogs = animals.filter((element) => {
    return element.type === "dog";
  });

  let sortedDogs = allDogs.sort((a, b) => {
    return a.age - b.age;
  });

  result.push(sortedCats, sortedDogs);
  return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
  let result = number;

  if (n === 0) {
    return 1;
  } else {
    result = number * myPowFunc(number, n - 1);
  }
  return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray, depth = 1) => {
  if (depth === 1) {
    return flattenArr(inputArray);
  }

  let result = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      result.push(myFlatFunc(inputArray[i], depth - 1));
    } else {
      result.push(inputArray[i]);
    }
  }
  return result;
};

function flattenArr(inputArray) {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      result = result.concat(flattenArr(inputArray[i]));
    } else {
      result.push(inputArray[i]);
    }
  }
  console.log(result);
  return result;
}

// solution from stackoverflow https://stackoverflow.com/questions/68503014/flatten-array-with-given-depth

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], "asdf", [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
