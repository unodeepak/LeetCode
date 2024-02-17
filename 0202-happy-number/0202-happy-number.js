var isHappy = function (n, arr = []) {
  if (n == 1) {
    return true;
  } else if (arr.includes(n)) {
    return false;
  } else {
    let sum = 0;
    arr.push(n);

    while (n > 0) {
      sum += (n % 10) * (n % 10);
      n = parseInt(n / 10);
    }
   
    return isHappy(sum, arr);
  }
};