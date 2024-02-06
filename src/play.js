fetch('/getLoginInfo')
.then(response => response.json())
.then(data => {
  $("#profile-name").text(data["display"]);
  $("#profile-pts").text(`${data["points"]} pts`);
  $("#profile-username").text(`@${data["username"]}`);
  $("#profile-picture").attr("src", data["picture"]);
})
.catch(error => {
  console.error('Error checking authentication:', error);
});