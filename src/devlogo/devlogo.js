function devlinks(){

    setTimeout(function () {window.open("https://github.com/MateusRissoDiBlasio","_blank");},1000);
}


// function showhideinfo(){
    
//     var element = document.getElementById("devinfo");
//     element.classList.toggle("on");

//     var deviconcolor = document.getElementById("devi");
//     deviconcolor.classList.toggle("devcolor")

// }

const button = document.getElementById('deviconbtn');
let clickCount = 0;
var element = document.getElementById("devinfo");
var deviconcolor = document.getElementById("devi");

button.addEventListener('click', () => {
  clickCount++;
  if (clickCount % 2 === 1) {
    element.classList.remove('off');
    element.classList.add('on');
    deviconcolor.classList.add("devcolor")
  } else {
    element.classList.remove('on');
    element.classList.add('off');
    deviconcolor.classList.remove("devcolor")
  }
});