function getValue(){
    var birthDate = new Date(document.getElementById('birthdate').value);
    var mm=parseInt((birthDate.getMonth())+1);
    var dd=parseInt(birthDate.getDay());
    var year=birthDate.getFullYear();
    var cc= parseInt(year.toString().slice(0,1));
    var yy=parseInt(year.toString().slice(2,3));
    DayofWeek= Math.round(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    alert(DayofWeek);
}
