$(document).ready(function(){
    $(document).on("click", ".burger", function(){
        console.log($(this));
        var burger_id = $(this)[0].dataset.id;

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burger_id
        }).then(function(results){
            location.reload();
        })
    })

    $(".submitBurger").on("click", function(){
        var burgerObj = {
            burger: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerObj
        }).then(function(data){
            console.log(data);
            location.reload();
        })
    })
})