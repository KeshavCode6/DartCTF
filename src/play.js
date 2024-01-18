$(document).ready(() => {
    $(".ChallengePlay").on("click", function () {
        $("#overlay").css('display', 'flex');

        $(".caseBox div:not(.closeButtonContainer)").css('display', 'none');

        // Use $(this) to convert the clicked element to a jQuery object
        const targetId = $(this).attr('id').toLowerCase();
        $(`#${targetId}`).css('display', 'flex');
        $("#levelType").text(targetId.toUpperCase());
    });

    $("#closeCase").on("click", () => {
        $("#overlay").css('display', 'none');
    });

    fetch('/getLoginInfo')
    .then(response => response.json())
    .then(data => {
        console.log(data);
      $("#ProfileName").text(`${data["username"].givenName} ${data["username"].familyName}`)
      $("#ProfilePicture").attr('src', data['picture'])
      $("#ProfilePoints").text(`${data['points']} pts`)
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
});
