

$(document).ready(()=>{
    $("#close").on("click", ()=>{
        $("#overlay").css("display", "none")
    })
    UpdateLoginbutton();
})

const UpdateLoginbutton = ()=>{
    // Updating login or logout button depending on login state
    fetch('/auth/loggedIn')
    .then(response => response.json())
    .then(data => {
      if (data["loggedIn"]==true) {
        $("#login").attr("href", "auth/logout")
        $("#login").text("Logout")
        $("#login").on("click", ()=>{})
      } else {
        $("#login").removeAttr("href")
        $("#login").text("Login")
        $("#login").on("click", ()=>{
            $("#overlay").css("display", "flex")
        })    
      }
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
}