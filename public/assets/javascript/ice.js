$(function() {
  $("#submit").on("submit", function(event) {
    event.preventDefault();

    var newIceCream = {
      name: $("#usersInput")
        .val()
        .trim(),
      devoured: false
    };

    $.ajax("/api/icecreams", {
      type: "POST",
      data: newIceCream
    }).then(function() {
      console.log("added new ice cream");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devourIt").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/icecreams/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("devoured", devoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/creams/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
