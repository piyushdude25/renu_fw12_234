

function throttler(add, delay) {
  return (a, b) => {
    if (a + b > 5) {
      return add(a + 3, b - 1);
    }
  };
}

button.addEventListener(
  "click",
  throttler(() => {
    console.log("cliclk");
  }, 3000)
);
