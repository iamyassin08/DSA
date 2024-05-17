// #WMethod 1

// for  (var i =1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");

//     } else if (i % 3 === 0) {
//         console.log("Fizz");
        
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// #Method 2

// for (var i = 1; i <=100; i++) {

//     var output = "";

//     if (i % 3 === 0) {
//         output += "Fizz";
//     }   if (i % 5 === 0) { 
//         output += "Buzz";
//     } 
//     if(output == "") { output = i; }
//     console.log(output);
// }

// #4 ways- method 3

// function fizzbuzz(n) {
//     const results = [];
  
//     for (let i = 1; i <= n; i += 1) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         results.push('FizzBuzz');
//       } else if (i % 3 === 0) {
//         results.push('Fizz');
//       } else if (i % 5 === 0) {
//         results.push('Buzz');
//       } else {
//         results.push(i);
//       }
//     }
    
//     return results;
//   }

  // #4 ways- method 4

//   function fizzbuzz(n) {
//     const results = [];
  
//     for (let i = 1; i <= n; i += 1) {
//       let result = '';
  
//       if (i % 3 === 0) {
//         result += 'Fizz';
//       }
      
//       if (i % 5 === 0) {
//         result += 'Buzz';
//       }
  
//       if (result) {
//         results.push(result);
//       } else {
//         results.push(i);
//       }
//     }
    
//     return results;
//   }

   // #4 ways- method 5

   function fizzbuzz(n) {
    return Array.from({ length: n }, (_, i) => {
      i += 1;
      let result = '';
  
      if (i % 3 === 0) {
        result += 'Fizz';
      }
      
      if (i % 5 === 0) {
        result += 'Buzz';
      }
  
      return result || i;
    });
  }
  
  console.log(fizzbuzz(3)) // [1, 2, "Fizz"]
  console.log(fizzbuzz(5))
  
  console.log(fizzbuzz(16))