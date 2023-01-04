const arrayInput = parseInt(prompt("Введіть довжину массива"));
let x = 0;
let i = 0;

function getLenght() {
  if (arrayInput === null) {
    alert("Це строка");
    return;
  } else if (isNaN(+arrayInput)) {
    alert("Empty");
    return;
  } else {
    return arrayInput;
  }
}

const arrOne = [];
arrOne.length = arrayInput;

console.log(arrOne.length);

while (x < arrayInput) {
  arrOne.splice(i, 0, prompt("Введіть елемент масива"));
  i++;
  x++;
}
const newArr = arrOne.filter((a) => a);
console.log(newArr);

newArr.sort((a, b) => a - b);
console.log(newArr);

newArr.splice(2, 2);
console.log(newArr);
