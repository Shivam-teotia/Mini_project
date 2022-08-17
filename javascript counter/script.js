let  x=Number(document.getElementById('number').innerHTML);
function increase(){
    x=x+1;
    document.getElementById('number').innerHTML=x;
}
function decrease(){
    x=x-1;
    document.getElementById('number').innerHTML=x;
}
function neutral(){
    x=0;
    document.getElementById('number').innerHTML=x;
}
