
var curtime = new Date()
var curmonth = curtime.getMonth()+1;
var day = curtime.getDate();
var dateOfString = (("" + day).length < 2 ? "0" : "") + day ;
var dia = (dateOfString * 1) 

var curmonth = 1;
// var dia = 12;

console.log(curmonth);



if(curmonth == 1 || curmonth == 2 || curmonth == 3 || curmonth == 4 || curmonth == 5 || curmonth == 7 || curmonth == 8){

    location.replace ("./bio-transformacao.html")

}

if(curmonth == 6){
    
    if((curmonth == 6) && (dia == 12) ){
    location.replace ("./src/campanhas/Namorados/dia-namorados.html")
        } else{
            location.replace ("./src/campanhas/Namorados/namorados.html")
        }

}

// Ideia - Após dia dos Namorados, Festa Junina


// Ideia - Mês do Consumidor
// if(curmonth == 9){

//     location.replace ("src/campanhas/SetembroAmarelo/setembro-amarelo.html")

// }

if(curmonth == 10){

    location.replace ("./src/campanhas/OutubroRosa/outubro-rosa.html")
    
}

// Ideias - Possível Esquenta e Black Friday
// if(curmonth == 11){
//     location.replace ("src/campanhas/NovembroAzul/novembro-azul.html")

// }
