/*
Note: Just add the code inside the document function to the previous code in FreecodeCamp's lesson.
*/

/* 1st lesson */
// add this code inside of the script tag
$(document).ready(function () { });


/* 2nd lesson */
// add this code inside of the script tag
$(document).ready(function () {
    $("button").addClass("animated bounce");
});


/* 3rd lesson */
// add this code inside of the script tag

$(document).ready(function () {
    $(".well").addClass("animated shake");
});


/* 4th lesson */
// add this code inside of the script tag

$(document).ready(function () {
    $("#target3").addClass("animated fadeOut");

});


/* 5th lesson */
// add this code inside of the script tag

$(document).ready(function () {

});


/* 6th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $(".btn").addClass("animated");
    $("button").addClass("shake");
    $("#target1").addClass(" btn-primary");
});


/* 7th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("button").removeClass("btn-default");
});


/* 8th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target1").css("color", "red");

});


/* 9th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target1").prop("disabled", true);

});


/* 10th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target4").html("<em>#target4</em>");
});


/* 11th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target4").remove();
});


/* 12th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target2").appendTo("#right-well");

});


/* 13th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target5").clone().appendTo("#left-well");
});


/* 14th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#target1").parent().css("background-color", "red")
});


/* 15th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("#right-well").children().css("color", "orange")
});


/* 16th lesson */
// add this code inside of the script tag

$(document).ready(function () {
    $(".target:nth-child(2)").addClass("animated bounce");

});


/* 17th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $(".target:even").addClass("animated shake");
});


/* 18th lesson */
// add this code inside of the script tag

$(document).ready(function () {

    $("body").addClass("animated hinge");
});



/*
final script tags
***
<script>
    $(document).ready(function () {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $("#left-well").children().css("color", "green");
        $(".target:nth-child(2)").addClass("animated bounce");
        $(".target:even").addClass("animated shake");
        $("body").addClass("animated hinge");
    });
</script>
***
*/