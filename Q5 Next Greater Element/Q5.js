function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc=parseInt(input[0]);
    let l=1;
    while(tc--){
    let n=parseInt(input[l]);l++;
    let arr=input[l].trim().split(" ").map(Number);l++;
    solve(arr,n) 
    }
  }
  function solve(arr,n){
      let stack=[];
      let ans=[];
      for(var i=n-1;i>=0;i--){
            if( stack[stack.length-1]>arr[i]){
              ans.push(stack[stack.length-1]);
          }
          else if(stack.length>0 && stack[stack.length-1]<=arr[i]){
              while(stack.length>0 && stack[stack.length-1]<=arr[i]){
                  stack.pop();
              }
              if(stack[stack.length-1]>arr[i]){
              ans.push(stack[stack.length-1]);
             }
          else{
              ans.push(-1);
          }
              
          }
          else if(stack.length===0){
              ans.push(-1);
          }
          stack.push(arr[i]);
      }
      console.log(ans.reverse().join(" "));
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }