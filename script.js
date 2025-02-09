var curtime = new Date()
var curmonth = curtime.getMonth()+1;

var curmonth = 1

if(curmonth == 1 || curmonth == 2 || curmonth == 3 || curmonth == 4 || curmonth == 5 || curmonth == 7 || curmonth == 8){

    location.replace ("bio-transformacao.html")

}

if(curmonth == 11){

    location.replace ("src/campanhas/Namorados/namorados.html")

}

if(curmonth == 9){

    location.replace ("src/campanhas/SetembroAmarelo/setembro-amarelo.html")

}

if(curmonth == 10){

    location.replace ("src/campanhas/OutubroRosa/outubro-rosa.html")
    
}

if(curmonth == 12){
    location.replace ("src/campanhas/NovembroAzul/novembro-azul.html")

}
