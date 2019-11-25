function setHeader(){
    var ele=document.querySelector(".banner .header .navbar");
    window.onscroll=function(){
        var t=document.body.scrollTop || document.documentElement.scrollTop;
        var h=500;
        var opacity=0;
        if(t>h){
            opacity=1;
        }else{
            opacity=t/h*1;
        }
        ele.style.backgroundColor="rgba(231,231,231,"+opacity+")";
    }
}
setHeader();