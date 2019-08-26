function entBtn(){
    var distance = +(document.getElementById("distance").value);
    var time = +(document.getElementById("time").value);
    var v = distance/time;
    document.getElementById("answer").innerHTML = "Speed: "+ v.toFixed("2") + " km/hr";
}