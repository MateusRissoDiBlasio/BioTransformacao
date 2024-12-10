function devlinks(){

    setTimeout(function () {window.open("https://github.com/MateusRissoDiBlasio","_blank");},1000);
}


function showhideinfo(){
    
    var element = document.getElementById("devinfo");
    element.classList.toggle("on");

    var deviconcolor = document.getElementById("devi");
    deviconcolor.classList.toggle("devcolor")

}

