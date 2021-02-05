function once(func) {
  let result = null;

  return function () {
    if (!result) {
      result = func.apply(this, arguments);
    }

    return result;
  };
}

function add(numA, numB) {
  return numA + numB;
}

const onceAdd = once(add);

console.log(onceAdd(1, 2));
console.log(onceAdd(2, 2));
console.log(onceAdd(5, 7));
