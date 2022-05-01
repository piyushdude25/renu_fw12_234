function toggler(a, b, c) {
  return function () {
    console.log(a + b + c);
  };
}

const toggle = toggler(1, 2, 3);

toggle();
// 1
toggle();
// 2
toggle();
// 3
