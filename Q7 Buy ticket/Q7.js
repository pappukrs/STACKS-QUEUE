function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n =parseInt(input[0]);
    let l=1;
    let Q=[];
    while(n--){
        let line=input[l].trim().split(" ");l++;
        let operation=line[0];
        if(operation==="E"){
            Q.unshift(parseInt(line[1]))
            console.log(Q.length);
        }
        else{
            if(Q.length>0){
                 let x= Q.pop();
           console.log(x,Q.length);
            }
            else{
                console.log("-1","0");
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