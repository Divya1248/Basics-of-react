var x=document.getElementById("test")
var i=10;

function display(){
    if(i<=100){
        if(i%2==0)
        {
       x.innerHTML=i;
       i-=2;
        }
    }
    // else{
    //     i-=2;
    // }
  
}


function display1(){
    if(i<=100){
        if(i%2==0){
       x.innerHTML=i;
       i+=2;
        }
    }
    else{
        i+=2;
    }
  
}