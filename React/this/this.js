
//how to use this keyword 
let add =(a,b)=>{
    return (a+b);
   }
   
   let multiply =(a,b)=>{
       return a*b;
   };
   
   function calculate(num1,num2,callback){
        return this;
   }
   //add
   let data=calculate.call(add(2,4));
   console.log(data);
   console.log(typeof data);
   
   //multiply
   let data1=calculate.call(multiply(2,4));
   console.log(data1);
   let x=data1.valueOf();
   console.log(x);
   
   
   //convert object to number use valueof
   let convertobjectintoprimitive=data.valueOf();
   console.log(convertobjectintoprimitive);
   console.log(typeof convertobjectintoprimitive);

   console.log(this)//pointing to window object
   {   
   console.log(this);//window
   }

   function shashi(){
       console.log(this)
   }
  // shashi();//window
  new shashi();// current object

  class test{
      constructor(name,company){
          this.name=name;
          this.company=company;
      }
  }
  let shashi= new test('shahsi','testyantra');//current object as shashi()

  //create object using function
  function user(name,company){
    this.name=name;
    this.company=company;
  }
  let s=new user('shas','testyantra');
  console.log(s);