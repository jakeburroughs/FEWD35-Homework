$(document).ready(function() {


    $(document).on("submit", "#wine-form", function(event) {
        event.preventDefault();

        var wineData = {
            name: $("input[name='name']").val(),
            year: $("input[name='year']").val(),
            grapes: $("input[name='grapes']").val(),
            country: $("input[name='country']").val(),
            region: $("input[name='region']").val(),
            price: $("input[name='price']").val(),
            description: $("input[name='description']").val()
        }

        $.ajax({
            type: "POST",
            url: "http://daretodiscover.herokuapp.com/wines",
            data: wineData,
            success: function() {
                alert("Success!");
                $("#wine-form")[0].reset();
            },
            error: function() {
                alert("Error!");
            }
        });
    }); 

    $(document).on("click", "#log", function(event) {

        $.ajax({
            type: "GET",
            url: "http://daretodiscover.herokuapp.com/wines",
            success: function(wineData) {
                for (var i in wineData) {
                    console.log(wineData[i])
                }
            },
            error: function() {
                alert("Error");
            }


        });


    });


    });