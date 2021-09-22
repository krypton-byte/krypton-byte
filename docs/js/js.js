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
    $("#moon1").on("click", switchMode)
    function switchMode(){
        color = mode_==='light'?mode.night:mode.light
        mode_ = mode_==='light'?'night':'light'
        $("p")[0].style.color = color.icon;
        $("body").css("background",color.background);
        $(".textc").css("color",color.icon)
        $(".accordion-item").css("background-color",color.background)
        $(".accordion-button").css("background-color", color.background)
        $(".card").css("background-color", color.background)
        for(var x of $("box-icon")){
            x.attributes.color.value = color.icon;
        }
        for(var x of $("li").find("a")){
            x.style.color = color.icon;
        }
    }

})
$(document).ready(function (){
    console.log("ready")
    function setProfile(url){
        $.ajax({type:"get",url:url}).then((resp)=>{
            console.log(resp)
            $("#name").text(resp.name)
            $("#age").text(Math.floor((new Date()-new Date(resp.birth))/3.154e+7).toString().slice(0,-3))
            for(let social of Object.keys(resp.social)){
                $(`#${social}`).on('click', ()=>{
                    window.open(resp.social[social], '_blank');
                })
            }
        })
    }
    setProfile("/profile.json")
    component = {
        profile: $(".profile"),
        school: $(".school"),
        skill: $(".skill"),
        contact: $(".contact")
    }
    getcomp = function (keys){
        Object.keys(component).map(x=> x==keys?component[x].show():component[x].hide())
    }
    getcomp("profile")
})
