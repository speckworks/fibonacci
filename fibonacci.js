const memoFib = (value, memo =[]) => {
    if (memo[value] !== null) return memo[value]; 
    if (value <= 2) return 1;
    let result = fib(value-1, memo) + fib(value-2,memo);
    memo[value] = result
    return result
  }