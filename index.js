$(document).ready(function () {
    $(".men").click(function () {
        $(".men-items").slideToggle("slow");
    });
});


$(document).ready(function () {
    $(".women").click(function () {
        $(".women-items").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#new2").hover(function () {
        $(".left-view").toggle("slow");
    });
});


$(document).ready(function () {
    $("#home").hover(function () {
        $(".middle-view").toggle("slow");
    });
});


$(document).ready(function () {
    $("#home2").hover(function () {
        $(".middle-view2").toggle("slow");
    });
});


$(document).ready(function () {
    $("#woman").hover(function () {
        $(".right-view").toggle("slow");
    });
});


$(document).ready(function () {
    $("#bg").hover(function () {
        $(".bg-view").toggle("slow");
    });
});


$(document).ready(function () {
    $("#2a").hover(function () {
        $(".four-price").toggle("slow");
    });
});
