const UpdateLoginbutton = ()=>{
    fetch('/auth/loggedIn')
    .then(response => response.json())
    .then(data => {
      if (data["loggedIn"]==true) {
        $("#dashboardLink").removeClass("nav-link disabled")
        $("#dashboardLink").addClass("nav-link")
        $("#login").text("Logout")
        $("#login").removeAttr("data-toggle");
        $("#login").removeAttr("data-target");
        $("#login").on("click", ()=>{window.location.href="auth/logout"})
        console.log("in")
      } else {
        $("#dashboardLink").removeClass("nav-link")
        $("#dashboardLink").addClass("nav-link disabled")
        $("#login").text("Login")
        $("#login").attr("data-toggle", "modal");
        $("#login").attr("data-target", "#loginModal");
        console.log("out")
      }
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
}

UpdateLoginbutton();