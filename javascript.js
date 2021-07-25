let third = document.getElementById("third");
let thirdmove = document.getElementsByClassName("thirdmove");
let second = document.getElementById("second");
let first = document.getElementById("first");
let images;

const request = new Request("https://api.giphy.com/v1/gifs/search?q=nba&api_key=EJgC8gC5E8r6gtEbuNf46POFykTvVW7X&limit=12");
const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
 fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log(response.data["0"]);  
    images = [response.data["0"].images.original.url, response.data["1"].images.original.url, response.data["2"].images.original.url, response.data["3"].images.original.url, response.data["4"].images.original.url, response.data["5"].images.original.url, response.data["6"].images.original.url, response.data["7"].images.original.url, response.data["8"].images.original.url, response.data["9"].images.original.url, response.data["10"].images.original.url, response.data["11"].images.original.url]
    third.innerHTML = `
    <img src="${response.data["0"].images.original.url}" >
    `
    second.innerHTML = `
    <img src="${response.data["1"].images.original.url}">
    `
    first.innerHTML = `
    <img src="${response.data["2"].images.original.url}" height="200px" width = "300px">
    `
  }).catch(error => {
    console.error(error);
  });
  var i = 1;
  var j = 2;
  var k = 3;
  function nextGif(){
    
    if (i < images.length){
        i = i+1;
        third.className = "thirdmove";
    }else{
        i = 1;
    }
    third.innerHTML = "<img src="+images[i-1]+">";
    if (j < images.length){
      j = j+1;
    }else{
      j = 1;
    }
    second.innerHTML = "<img src="+images[j-1]+">";
    if (k < images.length){
      k = k+1;
    }else{
      k = 1;
    }
    first.innerHTML = "<img src="+images[k-1]+">";
  
  


    let colors = [ "#e4a502", "#fa5f2f", "#bf81cc"] ;
    
    let button= document.getElementById("button");

    button.addEventListener("click", function(){

      var randomColor= colors[Math.floor(Math.random()*colors.length)]

      let container= document.getElementById("container");

      container.style.background = randomColor

    })
  }
  
  function prevGif(){
    if (i > 1 ){
        i = i-1;
    }else{
        i = images.length;
    }
    third.innerHTML = "<img src="+images[i-1]+">";
    if (j > 1 ){
      j = j-1;
    }else{
      j = images.length;
    }
    second.innerHTML = "<img src="+images[j-1]+">";
    if (k > 1){
      k = k-1;
    }else{
      k = images.length;
    }
    first.innerHTML = "<img src="+images[k-1]+">";

    
    let colors = [ "#e4a502", "#fa5f2f", "#bf81cc"] ;
    
    let button1= document.getElementById("button1");

    button1.addEventListener("click", function(){

      var randomColor= colors[Math.floor(Math.random()*colors.length)]

      let container= document.getElementById("container");

      container.style.background = randomColor

    })
  }

  