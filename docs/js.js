function href(url){
    window.open(url, '_blank');
}
$(document).ready(function(){

    mode = {
        night:{
            background:"black",
            icon:"white"
        },
        light:{
            background:"white",
            icon:"black"
        }
    }
    mode_ = "night"
    $("#moon").on("click", switchMode)
    function switchMode(){
        color = mode_==='light'?mode.night:mode.light
        mode_ = mode_==='light'?'night':'light'
        $("p")[0].style.color = color.icon;
        $("body").css("background",color.background);
        for(var x of $("box-icon")){
            x.attributes.color.value = color.icon;
        }
        for(var x of $("li").find("a")){
            x.style.color = color.icon;
        }
    }

})