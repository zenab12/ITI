/*
a. Make your own interface to create tabs and display usernames by requesting users from the link below using Ajax ES6 fetch function: https://jsonplaceholder.typicode.com/users 

Note: handle the response with promises using then and catch methods. 
*/

let ulContainer = document.querySelector("ul.container");
new Promise(function (res, rej) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        res(xhr.responseText);
      } else {
        rej("failed in catch data");
      }
    }
  };
  xhr.send("");
})
  .then(function (obj) {
    let users = JSON.parse(obj);
    users.forEach((element) => {
      ulContainer.innerHTML += `<li><button>${element.name}</button></li>`;
    });
    let userbtn = document.querySelectorAll("button");
    let name = document.querySelector("article p");
    console.log(userbtn);
    userbtn.forEach((btn, ind) => {
      btn.addEventListener("click", function () {
        name.innerHTML = this.innerHTML;
        getPost(`https://jsonplaceholder.typicode.com/posts?userId=${++ind} `);
      });
    });
  })
  .catch(console.log);

/*
  b. When a user tab is clicked display its posts’ titles by requesting the posts from the link below using Ajax ES6 fetch function:  

https://jsonplaceholder.typicode.com/posts?userId=userId 

Note:  

handle the response with promises using Async and await. 

do not get the posts of all users on page load, the user tab must be clicked to request its posts.
  */

let articleDetails = document.querySelector("article ul");
async function getPost(file) {
  let response = await fetch(file);
  if (response.ok) {
    let result = await response.json();
    console.log(result);
    articleDetails.innerHTML = ` `;
    result.forEach((el, ind) => {
      articleDetails.innerHTML += `<li><span class="title">${el.title} : </span><span class="details">${el.body}</span></li>`;
    });
  } else {
    alert(response.status);
  }
}
