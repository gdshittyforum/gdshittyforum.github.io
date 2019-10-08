function checkMobile(width, height) {
    if (width < 1250) {
        $(".display").css("float", "none");
        $(".display").css("margin", "auto");
        $("#map").css("width", "100%");
        $("#more").css("margin-top", "70px");
        $("#more").css("width", "100%");
        $(".more").css("margin", "auto");
        $(".more").css("width", "380px");
        $("#display-line").show();
        $("#userpointrank").css("margin-top", "70px");
        $(".Info-mapInfo-line").css("float", "none");
        $("#popup-up-display").css("width", "300px");
    } else {
        $(".display").css("float", "left");
        $(".display").css("margin", "");
        $("#map").css("width", "75%");
        $("#more").css("margin-top", "");
        $("#more").css("width", "25%");
        $(".more").css("margin", "");
        $(".more").css("width", "");
        $("#display-line").hide();
        $("#userpointrank").css("margin-top", "");
        $(".Info-mapInfo-line").css("float", "left");
        $("#popup-up-display").css("width", "570px");
    }

    if (height > 1000) {
        $("header").css("height", "100px");
        $("#side_button").css("height", "90px");
        $("#title-img").css("width", "320px");
        $("#title-img").css("margin-top", "10px");
        $("#side").css("font-size", "45px");
        $(".list").css("line-height", "60px");
        $("#side").css("width", "600px");
        $(".list_author").css("font-size", "29px");
        $(".popup").css("top", "250px");
        $("#search").css("height", "40px");
        $("#search").css("margin-top", "-5px");
        $("#search").css("width", "400px");
        $("#search").css("font-size", "34px");
        
        $("#title").css("font-size", "75px");
        $("#author").css("font-size", "35px");
        $("#info-record-title").css("font-size", "30px");
        $("#cutline").css("font-size", "25px");
        $("#cutline-percent").css("font-size", "22px");
        $("#info-record-table").css("font-size", "22px");

        $("#userpointrank-title").css("font-size", "30px");
        $("#userpointrank").css("height", "600px");
        $("#userpointrank").css("width", "450px");
        $("#userpointrank-list").css("font-size", "27px");
        $("#userrank-title").css("font-size", "30px");
        $("#userrank").css("height", "270px");
        $("#userrank").css("width", "450px");
        $("#userrank-list").css("font-size", "27px");
        $("#summit-record").css("width", "450px");
        $("#summit-record").css("height", "120px");
        $("#summit-record").css("font-size", "25px");
        $("#discord").css("font-size", "30px");
        $(".userrank-link").css("font-size", "25px");
    } else {
        $("header").css("height", "50px");
        $("#side_button").css("height", "");
        $("#title-img").css("width", "");
        $("#title-img").css("margin-top", "");
        $("#side").css("font-size", "");
        $(".list").css("line-height", "");
        $("#side").css("width", "");
        $(".list_author").css("font-size", "");
        $(".popup").css("top", "");
        $("#search").css("height", "");
        $("#search").css("margin-top", "");
        $("#search").css("width", "");
        $("#search").css("font-size", "");

        $("#title").css("font-size", "");
        $("#author").css("font-size", "");
        $("#info-record-title").css("font-size", "");
        $("#cutline").css("font-size", "");
        $("#cutline-percent").css("font-size", "");
        $("#info-record-table").css("font-size", "");

        $("#userpointrank-title").css("font-size", "");
        $("#userpointrank").css("height", "");
        $("#userpointrank").css("width", "");
        $("#userpointrank-list").css("font-size", "");
        $("#userrank-title").css("font-size", "");
        $("#userrank").css("height", "");
        $("#userrank").css("width", "");
        $("#userrank-list").css("font-size", "");
        $("#summit-record").css("width", "");
        $("#summit-record").css("height", "");
        $("#summit-record").css("font-size", "");
        $("#discord").css("font-size", "");
        $(".userrank-link").css("font-size", "");
    }
}