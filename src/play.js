$(document).ready(() => {
    $(".ChallengePlay").on("click", function () {
        $("#overlay").css('display', 'flex');

        $(".caseBox div:not(.closeButtonContainer)").css('display', 'none');

        // Use $(this) to convert the clicked element to a jQuery object
        const targetId = $(this).attr('id').toLowerCase();
        $(`#${targetId}`).css('display', 'flex');
    });

    $("#closeCase").on("click", () => {
        $("#overlay").css('display', 'none');
    });
});