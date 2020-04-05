const func1 = param => {
  const array = [param];
  return array;
};

console.log(func1([1, 2, 3]));

let products = {
  name: "rooj",
  color: "pink",
  company: "mac",
  pieces: "",
  changes(newOne) {
    console.log((products.pieces = newOne));
  }
};

products.changes(10);
