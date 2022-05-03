function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=parseInt(input[0]);
    let l=1;
    let stack=[];
    while(n--){
       let line=input[l].trim().split(" ").map(Number);l++;
       let query=line[0];
       if(query===1){
           if(stack.length>0){
               console.log(stack[stack.length-1]);
               stack.pop();
           }
           else{
               console.log("No Food");
           }
       }
       else{
        stack.push(line[1]);   
       }
    }
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