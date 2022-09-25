const fibonacciNaive = (n) => {
  if (n <= 2) return 1;
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
};

const fibonacciDynamic = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibonacciDynamic(n - 1, memo) + fibonacciDynamic(n - 2, memo);
  memo[n] = res;
  return res;
};

const fib = (n) => {
  let memo = [undefined, 1, 1];
  memo[n] = fibonacciDynamic(n - 1) + fibonacciDynamic(n - 2);
  return memo[n];
};

console.log(fib(333));
