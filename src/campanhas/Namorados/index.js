let count = 0;

const firstIntervalId = setInterval(() => {
    if(document.getElementById('checkbox1').checked === true){
    
        setTimeout(function () {document.getElementById('checkbox1').checked = false;},2600);
        setTimeout(function () {document.getElementById('btn1', 'msg', 'bag').classList.remove('visibillity');},3200);
        }{};
    
        if(document.getElementById('checkbox2').checked === true){
        
        setTimeout(function () {document.getElementById('checkbox2').checked = false;},2600);
        setTimeout(function () {document.getElementById('btn2', 'msg', 'bag').classList.remove('visibillity');},3200);
    
        }{};
    
        if(document.getElementById('checkbox3').checked === true){
        
        setTimeout(function () {document.getElementById('checkbox3').checked = false;},2600);
        setTimeout(function () {document.getElementById('btn3', 'msg', 'bag').classList.remove('visibillity');},3200);
        }{};
    
    count = count+0.5;
    console.log(count);
    console.log(document.getElementById('checkbox1').checked === true);
    console.log(document.getElementById('checkbox2').checked === true);
    console.log(document.getElementById('checkbox3').checked === true);
}, 500);

function ruaOliveiraBotelho(){
    document.getElementById('btn1').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn1', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox1').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522999235157"; }, 2000);  
}

function ruaMoisesAmelio(){
    document.getElementById('btn2').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn2', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox2').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522996222125"; }, 2000);
}

function ruaGalianoDasNeves(){
    document.getElementById('btn3').addEventListener('click', function() {
        setTimeout(function () {document.getElementById('btn3', 'msg', 'bag').classList.add('visibillity'); document.getElementById('checkbox3').checked = true;}, 1000);
    });
    setTimeout(function () { window.location.href="https://api.whatsapp.com/send?phone=5522998815670"; }, 2000);
}

// TESTES PARA AJUSTES DA TRANSIÇÃO DO EFEITO

// var perfEntries = performance.getEntriesByType("navigation");

// if (perfEntries[0].type === "back_forward"){
//     setTimeout(function () { window.location.href="./namorados.html"; }, 100);
// }
// if (perfEntries[0].type === "back_forward" || perfEntries[0].type === "navigate" || perfEntries[0].type === "reload"){
// document.getElementById('heart1').addEventListener('click', function() { document.getElementById('checkbox1').checked = false });
// }
// if (perfEntries[0].type == "reload"){

//     setTimeout(); 

// }{ location.reload(); }

// var add = 0;

// if (perfEntries[0].type === "reload"){ 
//     add = add+1;
// }else{ location.reload(); }

// console.log(perfEntries[0].type);
// console.log(add);


// let count = 0;


// const intervalId = setInterval(() => {
//   if(document.getElementById('checkbox1').checked === true){

//     setTimeout(function () {document.getElementById('checkbox1').checked = false;},3000);

//   }{};

//   count = count+5;
//   console.log(count); // This will log the number every second
//   console.log(document.getElementById('checkbox1').checked === true)
// }, 5000); // Executes every 1000 milliseconds (1 second)
