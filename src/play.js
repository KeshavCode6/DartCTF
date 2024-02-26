fetch('/getLoginInfo')
  .then(response => response.json())
  .then(data => {
    $("#profile-name").text(data["display"]);
    $("#profileNameEdit").text(data["display"])
    $("#profile-pts").text(`${data["points"]} pts`);
    $("#profile-username").text(`[@${data["username"]}]`);
    $("#profile-picture").attr("src", data["picture"]);
  })
  .catch(error => {
    console.error('Error checking authentication:', error);
  });

let editProfile = false;
$("#editName").on("click", () => {
  editProfile = !editProfile;
  if (editProfile) {
    $("#profileNameEdit").css("display", "none")
    $("#profileEditInput").css("display", "block")
  }
  else {
    $("#profileNameEdit").css("display", "block")
    $("#profileEditInput").css("display", "none")
  }
})

$('#sendEditProfile').on("click", function () {
  var formData = new FormData($('#editProfile')[0]);

  // Make AJAX request
  $.ajax({
    url: '/editProfile',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      // Handle success
      $("#result").text('Profile updated successfully');
      $("#result").css('color', "green");

      setTimeout(() => {
        location.reload();
      }, 1000);
    },
    error: function (xhr, status, error) {
      var errorMessage = xhr.responseText.split("<pre>")[1].split("</pre>")[0].split("<br>")[0]
      $("#result").css('color', "red");
      $("#result").text(errorMessage);
    }
  });
});
