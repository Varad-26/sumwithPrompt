const prompt=require('prompt-sync')();

function sumNumbers() {
    let userInput;
    let isNumber;
    let number = [];
    
     do {
      userInput = prompt("Enter a number (leave empty to stop):");
  
      isNumber = !isNaN(Number(userInput));
      
      if (userInput && isNumber) {
          number.push(Number(userInput));
      } else if (!isNumber) {
          console.log("That's not a valid number. Try again.");
      }  
  
    } while (userInput !== "" && isNumber); 
    console.log(number);
    
    total = sumAllInputs(...number);
    
    function sumAllInputs(...number) {
        let total = 0;
        for (let num of number) {
          total = total + num;
        }
         return total;
      }
 
    console.log(total);
  }
  sumNumbers();
