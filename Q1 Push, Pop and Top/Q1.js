function runProgram(input) {
    // Write code here
     input=input.trim().split("\n");
  //   input.forEach((ele)=>{console.log(ele)})
    let n=parseInt(input[0]);
    let l=1;
    let stack=[];
    while(n--){
        let line=input[l].trim().split(" ").map(Number);l++;
        let operation=line[0];
        if(operation===1){
           stack.push(line[1]) ;
        }
        else if(operation===2){
            if(stack.length>0){
                stack.pop();
            }
           
        }
        else if(operation===3){
            if(stack.length>0){
                 console.log(stack[stack.length-1]);
            }
           else{
                console.log("Empty!");
            }
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