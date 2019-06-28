const input = process.argv.slice(2);

const isAction = (val) => {
  let myRegex = /^\#\w+$/
  return myRegex.test(val);
}

const add = (a,b) => {
  const total = a + b;

  return `${a} + ${b} = ${total}`;
}



const subtract = (a,b) => {
  const total = a - b;
  return `${a} - ${b} = ${total}`;
}

for(let i = 0; i < input.length; i++){
  if(isAction(input[i])){
    // console.log(`${input[i]} is a call to action`);
    let action = input[i].substr(1);
    // console.log(`action: ${action}`)
    let numbers = input.slice(i+1);
    // console.log(`Numbers: ${numbers}`);
    numbers = numbers.map(n => {
      if(!parseInt(n)){
        console.log(`${n} is not a number\nPlease use digits for numbers only`);
        return 0;
      }else{
        return parseInt(n);
      }
    })
    // console.log(` test ${numbers}`);
    let result = 0;
    switch(action){
      case "add":
        // console.log("action is add");
        result = add(numbers[0], numbers[1]);
        break;
      case "minus":
          let check = 
          result = subtract(numbers[0], numbers[1]);
          break;
      default :
        result = "hmm something went wrong";

    }
    console.log(result);
  }else{
    if(i === 0){
      console.log(`${input[i]} is not a an action\n 
    Please make sure to add a Hashtag (#)\n
    Accepted actions are #add and #minus`);
    }else{
      if(parseInt(input[i]) === NaN){
        console.log(`${input[i]} is not a number`);
      }
    }
  }
}

// console.log(process.argv);
// console.log(input);