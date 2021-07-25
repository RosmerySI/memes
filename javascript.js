let third = document.getElementById("third");
let thirdmove = document.getElementsByClassName("thirdmove");
let second = document.getElementById("second");
let first = document.getElementById("first");
let images = [];

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
    console.log(response.data);
	for(var i = 0; i < response.data.length; i++)
		images.push(response.data[i].images.original.url);
	  setCurrentImages();
    addChangeBackgroundColorButtonClick();
  }).catch(error => {
    console.error(error);
  });
  
  function setCurrentImages(){
	  third.innerHTML = `<img src="${images["0"]}">`;
    second.innerHTML = `<img src="${images["1"]}">`;
    first.innerHTML = `<img src="${images["2"]}" height="200px" width = "300px">`;
  }
  
  function addChangeBackgroundColorButtonClick(){
    let colors = [ "#e4a502", "#fa5f2f", "#bf81cc"] ;
    
    let buttons = document.querySelectorAll('.btnChangeColor')
    buttons.forEach(function(button){
      button.addEventListener("click", function(){
        var randomColor= colors[Math.floor(Math.random()*colors.length)]
        let container= document.getElementById("container");
        container.style.background = randomColor;
      });
    });
	}

  function onNextAnimationEnd(){
    let firstImage = images.shift();
    images.push(firstImage);
    setCurrentImages();
    third.classList.remove("thirdmove");
  }

  function onPreviousAnimationEnd(){
    let firstImage = images.pop();
    images.unshift(firstImage);
    setCurrentImages();
    third.classList.remove("thirdmove");
  }

  function nextGif(){
    third.removeEventListener("animationend", onNextAnimationEnd);
    third.removeEventListener("animationend", onPreviousAnimationEnd);
    third.addEventListener("animationend", onNextAnimationEnd);
    third.className = "thirdmove";
  }
  
  function prevGif(){
    third.removeEventListener("animationend", onNextAnimationEnd);
    third.removeEventListener("animationend", onPreviousAnimationEnd);
    third.addEventListener("animationend", onPreviousAnimationEnd);
    third.className = "thirdmove";
  }

  