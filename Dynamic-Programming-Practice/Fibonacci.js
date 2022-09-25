const fibonacciNaive = (n) => {
  if (n <= 2) return 1;
  return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
};

const fibonacciMemo = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo[n] = res;
  return res;
};

const fibonacciTab = (n) => {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
};

console.log(fibonacciTab(100));
