var navstatus=0;
function navopen(){
    if(!navstatus){

        $('.main-div').css('width','100vw')
        $('li').css('display','block');
        navstatus=1;
    }
    else{
        $('.main-div').css('width','0')
        $('li').css('display','none');
        navstatus=0;
    }
}