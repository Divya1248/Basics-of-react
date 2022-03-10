let searchinput = document.getElementById("search");
let template = document.getElementById("template");
searchinput.addEventListener("keyup", e => {
  // console.log(e.target.value);
  if (e.key === "Enter") {
    let searchtext = e.target.value;
    gituser(searchtext);
  }
});
let btn = document.getElementById("btn");
btn.addEventListener("click", e => {
  window.SpeechRecognition = window.webkitSpeechRecognition;
  let Speech = new SpeechRecognition();
  Speech.addEventListener("result", e => {
    let text = e.results[0][0].transcript;
    let finalword = (searchinput.value = text);
    gituser(finalword);
  });
  Speech.start();
});
async function gituser(cinput) {
  let URL = "https://api.github.com/users";
  let data=await window.fetch(`${URL}/${cinput}`);

  let users = await data.json();
  console.log(users);
  let { login, avatar_url, repos_url, company, location, bio } = users;
  template.innerHTML = `
              <main>
            <div>

             <img src=${avatar_url} alt=${login}/>
             <h1>name:${login}</h1>
             <h1>location:${location}</h1>
             <h1>company:${company}</h1>

          </div>

                </main>

                    `;
}

// // gokul
// let searchInput = document.getElementById('search');
// let template = document.getElementById('template');
// searchInput.addEventListener('keyup',e =>{
//  if(e.key==='Enter'){
//  let searchText = e.target.value;
//  searchGitUser(searchText);
//  }
// });

// // speech
// let btn=document.getElementById('btn');

// btn.addEventListener('click',e=>{
//  window.SpeechRecognition=window.webkitSpeechRecognition;
//  let speech=new SpeechRecognition();
//  speech.addEventListener('result',e=>{
//  let text=e.results[0][0].transcript;
//  let finelText=(searchInput.value=text)
//  searchGitUser(finelText);
//  });
//  speech.start();
// })

// async function searchGitUser(searchValue){
//  let URL = 'https://api.github.com/users';
//  let DATA = await window.fetch(`${URL}/${searchValue}`);
//  let JSON = await DATA.json();
//  let {login ,avatar_url,html_url,company,location,bio} = JSON;

// template.innerHTML =`
// <main>
//  <div>
//  <img src =${avatar_url} alt = ${login}/>
//  <h2>${company}</br>${location}</br>${bio}</h2>

//  </div>
// </main>
// `
// }

