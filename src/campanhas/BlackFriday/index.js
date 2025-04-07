const Logo1 = document.getElementById("Botao1");

Logo1.addEventListener("mouseenter", (e) => {
    document.getElementById("logo-1").classList.add('active-1');
});
  
Logo1.addEventListener("mouseleave", (e) => {
    document.getElementById("logo-1").classList.remove('active-1');
    
});


const Logo2 = document.getElementById("Botao2");

Logo2.addEventListener("mouseenter", (e) => {
    document.getElementById("logo-2").classList.add('active-2');
});
  
Logo2.addEventListener("mouseleave", (e) => {
    document.getElementById("logo-2").classList.remove('active-2');
    
});

const Logo3 = document.getElementById("Botao3");

Logo3.addEventListener("mouseenter", (e) => {
    document.getElementById("logo-3").classList.add('active-3');
});
  
Logo3.addEventListener("mouseleave", (e) => {
    document.getElementById("logo-3").classList.remove('active-3');
    
});

function ruaOliveiraBotelho(){
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522999235157"; }, 1000);  
}

function ruaMoisesAmelio(){
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522996222125"; }, 1000);
}

function ruaGalianoDasNeves(){
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522998815670"; }, 1000);
}

function PromosENovidades(){
    setTimeout(function () { window.location.href="https://www.instagram.com/stories/perftransformacao/"; }, 1100);
}