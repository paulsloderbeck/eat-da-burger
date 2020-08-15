$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurgerName = {
            name: $("#bur").val().trim(),
        };
        console.log(newBurgerName);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurgerName
        }).then(
            function (data) {
                console.log("created new burger" + data);
                location.reload();
            }
        );
    });
    $(".devour-burger").on("click", function (event) {
        let id = $(this).data("id");
        let newDevouredState = { devoured: true };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("burger" + id + "devoured");
                location.reload();
            }
        );
    });
});