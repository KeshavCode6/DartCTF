

$(document).ready(()=>{
    /* Basically making the next element visible or not when clicked */
    $(".collapsible").click(function() {
        $(this).toggleClass("active");
        var content = $(this).next();

        if (content.is(":visible")) {
            $(this).find("img").attr("src", "../../resources/icons/line-angle-down-icon.png");
            content.slideUp();
        } else {
            $(this).find("img").attr("src", "../../resources/icons/line-angle-up-icon.png");
            content.slideDown();
        }
    });

    $("#enterFlag").on('click', ()=>{
        var flag = $("#flag").val();
        if(flag.length>0){
            fetch('/enterFlag', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({'flag':flag, "url":window.location.pathname})
            })
            .then(response => response.json())
            .then(data => {
              alert(data["msg"])
            })
            .catch(error => {
              console.error('Error checking authentication:', error);
            });
        }
        else{
            alert("Flag Input is empty")
        }
    });
})
