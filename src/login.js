var login = async() =>{
  // Basic POST request with JSON payload
  var response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Other headers as needed
    },
    body: JSON.stringify({
      user:$("#emailLogin").val(), 
      pwd:$("#passwordLogin").val()
    })
  })

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

}

$('#login').on('click', async ()=>{
  await login();
})

$(document).ready(()=>{
  $("#loginContainer").removeClass("slide-left");
  $("#loginContainer").addClass("slide-right")
})


$("#signupNow").on("click", ()=>{
  $("#loginContainer").removeClass("slide-right");
  $("#loginContainer").addClass("slide-left");

  setTimeout(function(){
    window.location.href="/signup"
}, 500);
})


var setError = (msg)=>{
  $('#ErrorMsg').text(msg);
}

var clearSigninFields = () =>{
  $('#emailLogin').text("");
  $('#passwordLogin').text("");
}

$("#passwordLogin").on('keyup', async (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    await login();
  }
});

$("#emailLogin").on('keyup', async (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    $("#passwordLogin").focus()
  }
});

