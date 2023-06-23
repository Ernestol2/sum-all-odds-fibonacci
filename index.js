function sumFibs(num) {
  let ans = [0, 1];
  let res = 0;

  for(let i=2; (ans[i-2] + ans[i-1])<=num; i++) {
    ans[i] = ans[i - 2] + ans[i - 1]
  }

  for(let i=0; i<ans.length; i++) {
    if(ans[i]%2 !== 0) {
      
      res += ans[i]
    }
  }
  
return res;

}

sumFibs(75025);