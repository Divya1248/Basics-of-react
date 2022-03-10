// var x=prompt("enter a number");
// if(x>0)
// {
//     console.log("positive");
// }
// else if(x<0)
// {
//     console.log("negative");
// }
// else
// {
//     console.log("zero");
// }

// 2nd question
// var x=prompt("enter a number")
// var fact;
   
// function Factorial(x) {
//     if (x === 0) { 
//         return 1; 
//     }
//     else { 
//         return x * Factorial( x - 1 ); 
//     }
// }
// var y=Factorial(5);
// console.log(y);

//another way factorial
// var a = prompt("Enter the number");
// var b = 1;
// while(a !== 0){
//     b =  b * a;
//     a--;
// }
// console.log(b);

// 3.another way JavaScript Program to Print the Fibonacci Sequence 

// var a = 0;
// var b = 0;
// var c = 1;
// var d = prompt("Enter the number");
// while(a < d){
//     console.log(a);
//     a = b + c;
//     b = c;
//     c = a;
// };

//3rd fibonacci
function fibonacci(num)
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);

    }
document.write("Fibonacci(5): "+fibonacci(5)+"<br>");
document.write("Fibonacci(8): "+fibonacci(8)+"<br>");

//4 palindrome
//using number
// function Palindrome()
// 	{
// 		var rem, temp, final = 0;
// 		var number = prompt("enter number")

// 		temp = number;
// 		while(number>0)
// 		{
// 			rem = number%10;
// 			number = parseInt(number/10);
// 			final = final*10+rem;
// 		}
        
// 		if(final==temp)
// 		{
// 			window.alert("The inputed number is Palindrome");
// 		}
// 		else
// 		{
// 			window.alert("The inputted number is not palindrome");
// 		}
// 	}
//     console.log(final);
//     Palindrome();

    //string
//     var str=prompt("enter string");
//    var x= str.split('').reverse().join('');

//   // console.log(x);
//    if(x==str){
//        window.alert("its palindrome");
//    }
//    else{
//     window.alert("its not palindrome");
//    }

//    //check number is even or odd
//    var x= prompt("enter number");
//    if(x%2==0){
//        console.log("it is even")
//    }
//    else{
//        console.log("it is odd")
//    }

// let searchinput=document.getElementById("search");
// let test=document.getElementById("test")
// searchinput.addEventListener("keyup" ,e =>{
//     let text=(e.target.value);
//     gituser(text);
// })

// async function gituser(input){
//     let url="https://jsonplaceholder.typicode.com/users";
//     let data= await window.fetch(`${url}/${input}`);
//     let json= await data.json();
//     console.log(json);
//     let{name,id,company}=json;
//     test.innerHTML=`<main>
//     <div>
//     <h1>${name}</h1>
//     <h1>${id}</h1>
//     <h1>${company}</h1>
//     <div>
//     <main>
//     `


// }
