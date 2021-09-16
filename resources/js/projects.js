$("#all,#web,#games,#app").click(function() {


    $("#all,#web,#games,#app").removeClass("active");
    $(this).addClass("active");
    switch (this.id) {
        case 'all':
            $("div").show(500);
            console.log("all");
            break;
        case 'web':
            $(".games,.app").hide(500);
            $("." + this.id).show(500);

            console.log("web");
            break;

        case 'games':
            $(".web,.app").hide(500);
            $("." + this.id).show(500);
            console.log("games");
            break;
        case 'app':
            $(".web,.games").hide(500);
            $("." + this.id).show(500);
            console.log("app");
            break;
        default:
            alert("default");
    }

});