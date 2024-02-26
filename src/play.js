fetch('/getLoginInfo')
.then(response => response.json())
.then(data => {
  $("#profile-name").text(data["display"]);
  $("#profileNameEdit").text(data["display"])
  $("#profile-pts").text(`${data["points"]} pts`);
  $("#profile-username").text(`[${data["username"]}]`);
  $("#profile-picture").attr("src", data["picture"]);
})
.catch(error => {
  console.error('Error checking authentication:', error);
});

let editProfile = false;
$("#editName").on("click", ()=>{
  editProfile = !editProfile;
  if(editProfile){
    $("#profileNameEdit").css("display", "none")
    $("#profileEditInput").css("display", "block")
  }
  else{
    $("#profileNameEdit").css("display", "block")
    $("#profileEditInput").css("display", "none")
  }
})