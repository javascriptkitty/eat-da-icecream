$("#submit").on("click", function(event) {
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
