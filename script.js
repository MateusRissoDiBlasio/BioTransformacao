var curtime = new Date()
var curmonth = curtime.getMonth()+1;
var curday = curtime.getDay()

// just for testing 
// var curmonth = 2
// var curday = 9

if(curmonth == 1 || curmonth == 2 || curmonth == 3 || curmonth == 4 || curmonth == 5 || curmonth == 7 || curmonth == 8){

    location.replace ("bio-transformacao.html")

}

if(curmonth == 6){

    location.replace ("src/campanhas/Namorados/namorados.html")

}

if(curmonth == 10){

    location.replace ("src/campanhas/OutubroRosa/outubro-rosa.html")
    
}

if(curmonth == 10 && curday == 25 || curmonth == 10 && curday == 26 || curmonth == 10 && curday == 27 || curmonth == 10 && curday == 28 || curmonth == 10 && curday == 29 || curmonth == 10 && curday == 30 || curmonth == 10 && curday == 31){

    location.replace ("src/campanhas/Halloween/halloween.html")

}
