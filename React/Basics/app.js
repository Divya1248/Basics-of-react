
//consume
//fetch api is connecting to external server

const URL ='https://api.github.com/users'
let template = document.getElementById('template');

async function FeatchApi(){
 let connectServer = await window.fetch(URL);
 let ConvertJSON = await connectServer.json();
 let output = '';
 for(let user of ConvertJSON){

 output+=`
 <div class = 'userBlock'>
 <img src = ${user.avatar_url} alt=${user.login}/>
 <h2>${user.login}</h2>
 <button>
 <a href=${user.html_url} target ="_blank">go to profile</a>
 </button>
 </div>`;
 
 }
 // loop ended here
 template.innerHTML = output;
}



FeatchApi()