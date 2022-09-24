export const fibonacciGenerator = function* fibonacci(n = 5, infinite = true) {
  let [previous, fibonacci, current] = [1, 1, 0];

  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const logic = () => {
    current = fibonacci;
    fibonacci = previous + current;
    previous = current;
    return fibonacci;
  };

  if (infinite) {
    while (true) {
      yield logic();
    }
  } else {
    for (let index = 1; index < n; index++) {
      yield logic();
    }
  }
};
