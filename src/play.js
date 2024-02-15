const profileNameRow = document.querySelector("#profile-name-row");
const usernameRow = document.querySelector("#username-row");

const profileName = profileNameRow.children[0];
const username = usernameRow.children[0];

const editProfileName = profileNameRow.children[1];
const editUsername = usernameRow.children[1];

profileNameRow.addEventListener("mouseover", () => {
    editProfileName.style.opacity = 0.5;
})

usernameRow.addEventListener("mouseover", () => {
    editUsername.style.opacity = 0.5;
})

profileNameRow.addEventListener("mouseleave", () => {
    editProfileName.style.opacity = 0;
})

usernameRow.addEventListener("mouseleave", () => {
    editUsername.style.opacity = 0;
})

editProfileName.addEventListener("click", () => {

  profileName.hidden = true;

  const editInput = document.createElement("input");
  editInput.setAttribute("id", "profile-name");
  editInput.setAttribute("class", "editable");

  profileNameRow.insertBefore(editInput, profileNameRow.children[0]);

})

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