$(document).ready(()=>{
    $("#signupForm").toggleClass("slide-right")
})

$('#backToLogin').on('click', ()=>{
    $("#signupForm").toggleClass("slide-right")
    $("#signupForm").addClass("slide-left")
    setTimeout(function(){
       window.location.href="/login"
    }, 500);
})

$("#usernameSignup").on('keyup', async (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $("#emailSignup").focus()
    }
});
$("#emailSignup").on('keyup', async (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $("#passwordSignup").focus()
    }});
$("#passwordSignup").on('keyup', async (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $("#passwordConfirmSignup").focus()
    }});
$("#passwordConfirmSignup").on('keyup', async (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        await signUp();
    }});

$("#signup").on("click", async ()=>{
    await signUp();
})

var signUp = async () => {
    // Basic POST request with JSON payload
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Other headers as needed
        },
        body: JSON.stringify({
          user: $("#emailSignup").val(),
          pwd: $("#passwordSignup").val(),
          pwdConfirm:$("#passwordConfirmSignup").val()
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      if(data.success==false){
        setError(data.message);
      }
      else
      {
        document.location.href=data.redirect
      }

    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
var setError = (msg)=>{
    $('#SignupErrorMsg').text(msg);
    clearSigninFields();
  }

var clearSigninFields = () =>{
    $('#usernameSignup').text("");
    $('#emailSignup').text("");
    $('#passwordSignup').text("");
    $('#passwordConfirmSignup').text("");
}