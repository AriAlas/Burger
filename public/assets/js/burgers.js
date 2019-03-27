// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
   
    $(".change-devour").on("click", function(event) {
       
        var id = $(this).data("id");
        console.log(id);

        var newState = {
            Devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            // console.log("changed devour to", true);
            // Reload the page to get the updated list
            location.reload();
        });
    });  

    $(".addBurger").on("click", function(event) {
        
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var name = $("#name").val().trim();

        if(name !== "") {
            var newBurger = {
                Burger_name: name,
                Devoured: false
            };
            console.log(newBurger);

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                // console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            });
        }
        else {
            $("#name").val("");
        }
    });

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  
});