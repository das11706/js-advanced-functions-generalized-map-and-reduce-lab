// Add your functions here

function map(array, func) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    newArray.push(func(val));
  }
  return newArray;
}


function reduce(sourceArray, func, startingValue) {
  let total;
  if(startingValue) {
    total = startingValue;
    for (let i = 0; i < sourceArray.length; i++) {
      total = func(sourceArray[i], total);
    }
    return total;
  } else {
    total = sourceArray[0];
    for (let i = 1; i < sourceArray.length; i++) {
      total = func(sourceArray[i], total);
    }
    return total;
  }
}
