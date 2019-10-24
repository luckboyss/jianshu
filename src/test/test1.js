function foo() {
  let n = 0;
  return function () {
    n++;
    console.log(n);
  }
}
const count = foo();
console.log(count);