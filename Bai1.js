function checkSNT(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  function sumSNT(n) {
    let snt = [];
    let sum = 0;
    for (let i = 2; i < n; i++) {
      if (checkSNT(i)) {
        snt.push(i);
        sum += i;
      }
    }
    console.log(snt);
    return sum;
  }
  
const N = 50;
console.log(sumSNT(N));
  