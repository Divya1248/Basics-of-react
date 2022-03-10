
//1. JavaScript Program to Count the Number of Vowels in a String
// var num="aeiou";
// var s=num.split('');
// count=1;
// for(var m of s){
//     if(m=="a"||m=="e"||m=="i"||m=="e"||m=="u"){
//         count++;
//     }
// }
// console.log(count);


// 
// // //2.  JavaScript Program to Check Perfect Number
// var num = 495;
// var i = 1;
// var total = 0;
// for(i = 1; i < num; i++)
// {
// if(num % i == 0)
//   total += i;
// }
// if(total == num)
// document.write(num +" is a perfect number");
// else
// document.write(num +" is not a perfect number");


// //  
// // 3.JavaScript Program to Check Armstrong Number
// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;
// // create a temporary variable
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;
//     sum += remainder ** numberOfDigits;
//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }


// // 
// //4. program to trim a string
// const string = '      Hello World       ';
// const result = string.split(' ').join('');
// console.log(result);



// //
// // 5. get dimentions of image
const img = new Image();
img.onload = function() {
  console.log(this.width + 'x' + this.height);
}
img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
