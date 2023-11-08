$(document).ready(function () {
    $("#idAll").prop("checked", true);
    $("#shoes").show();
    $("#accessories").hide();
    $("#menClothing").hide();
    $("#menClothing").hide();

    $("#idAll").click(function () {
        $("#all").show();
        $("#womenClothing").hide();
        $("#shoes").hide();
        $("#accessories").hide();
        $("#menClothing").hide();
    });
    $("#idShoes").click(function () {
        $("#all").hide();
        $("#womenClothing").hide();
        $("#shoes").show();
        $("#accessories").hide();
        $("#menClothing").hide();
    });
    $("#idAccessories").click(function () {
        $("#all").hide();
        $("#womenClothing").hide();
        $("#shoes").hide();
        $("#accessories").show();
        $("#menClothing").hide();
    });
    $("#idMenClothing").click(function () {
        $("#all").hide();
        $("#womenClothing").hide();
        $("#shoes").hide();
        $("#accessories").hide();
        $("#menClothing").show();
    });
    $("#idWomenClothing").click(function () {
        $("#all").hide();
        $("#womenClothing").show();
        $("#shoes").hide();
        $("#accessories").hide();
        $("#menClothing").hide();
    });
});