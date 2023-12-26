import Cookies from "js-cookie";

$("document").on("ready", ()=>{
  setMonth(new Date().getMonth()+1);
})


$("#signOut").on("click", async()=>
{
    console.log("log")
})

$("#dnd").on("click", ()=>{
    const img = $("#dnd img:first-child");

    if(img.attr("src") == "resources/icons/youtube-subscribe-bell-icon.png")
    {
        img.attr("src", "resources/icons/nonotis.png")
    }
    else
    {
        img.attr("src", "resources/icons/youtube-subscribe-bell-icon.png")
    }
})


async function refreshToken() {
    try {
      // Retrieve the refresh token from where you stored it (e.g., cookies)
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      
      const response = await fetch('/refresh', {
        method: 'POST',
        mode: 'same-origin',
        redirect: 'follow',
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers: headers,
        body: JSON.stringify({

        })
      });
      
      if (!response.ok) {
        throw new Error('Token refresh failed');
      }
      console.log("refresh")

      let d = await response.json();
      Cookies.set("jwtToken", d.jwt);

    } catch (error) {
        console.error(error)
        document.location.href="/login"      
    }
}

$(document).ready(()=>{
  setInterval(refreshToken, 1000*60*5);
  createTimeTable();
})
