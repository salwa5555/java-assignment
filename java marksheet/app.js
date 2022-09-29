function myFunction(){
    
var mark1=document.getElementById("number1").value;
var mark2=document.getElementById("number2").value;
var mark3=document.getElementById("number3").value;

var total=parseInt(mark1)+parseInt(mark2)+parseInt(mark3);
var per=total/200*100;

document.getElementById("loop").innerHTML="total marks:"+total+"percentage:"+per+"%";

if(per>=50){
    document.getElementById("loop").style="color:green;border:2px solid black";

}
else{
    document.getElementById("loop").style="color:red"
}

if(pass>=50 ){
    document.getElementById("report").style="color:green;border:2px solid blueviolet";

}




}