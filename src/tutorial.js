let i = 0
let sections = {
    0:{text:"You are currently on the dashboard. Here you can find the leaderboard, profile edit and level selection", position:{top:50, left:50}},
    1:{text:"This is the leaderboard section. It shows the top Dart CTF players in order", position:{top:20, left:35}},
    2:{text:"This is the profile area. Click the settings (cog) button to edit your profile picture. The help button is used to start the tutorial", position:{top:15, left:70}},
    3:{text:"This is the level selection area. Click play to start whichever level you want. We will open the cryptography section in this case", position:{top:25, left:60}},
    4:{text:"This is the challenge screen. You wil be prompted with a level selection menu, however it is fairly self explanatory (click the play on the challenge you want)", position:{top:25, left:60}},
    5:{text:"This case information panel. You may find some helpful information regarding the level here.", position:{top:25, left:20}},
    6:{text:"This is where the real challenge would be. Right now, this area is blank.", position:{top:75, left:50}},
    7:{text:"Here you have the flag input. Once you complete the challenge, enter the flag you find (keep in mind the two footnotes)", position:{top:85, left:20}},
    8:{text:"In a real challenge, you will recieve feedback in the center of the screen", position:{top:50, left:50}},
    9:{text:"That's all for the tutorial. Click next to restart or exit to go back to the dashboard", position:{top:50, left:50}},
}

let challengeHTML = `
<div class="container-fluid d-flex flex-row fill-height">
<div class="col-3 d-flex align-items-center flex-column" style="padding: 10px; gap: 5px;">
    <div class="card h-20 w-100 b1" id="board-card">
        <div class="card-body d-flex align-items-center justify-content-center flex-column"
            style="text-align: center;">
            <h5 class="card-title d-flex" style="gap:5px">Challenge Info<i class="bi bi-info-square-fill"></i>
            </h5>
            <p class="card-text d-flex justify-content-center align-items-center flex-column">
                <span class="challname">Tutorial (fake challenge)</span>
            <div class="container-fluid">
                <a class="btn btn-success" href="/dashboard" aria-hidden="true"><i
                        class="bi bi-arrow-90deg-left"></i>Back to home</a>
            </div>
            </p>
        </div>
    </div>
    <div class="card h-60 w-100 b1" id="board-card">
        <div class="card-body d-flex align-items-center justify-content-center flex-column"
            style="text-align:center;">
            <h5 class="card-title d-flex" style="gap:5px">Case Description<i class="bi bi-file-text-fill"></i>
            </h5>
            <p class="card-text d-flex justify-content-center align-items-center" id="challdesc">Learn how to use Dart CTF!</p>
        </div>
    </div>
    <div class="card h-60 w-100 b1" id="board-card">
        <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title d-flex" style="gap:5px">Resources<i class="bi bi-bar-chart-fill"></i></h5>
            <p class="card-text d-flex">
            <ul class="challres"><li>Pay attention</li></ul>
            </p>
        </div>
    </div>
    <div class="card h-60 w-100 b1" id="board-card">
        <div class="card-body d-flex align-items-center flex-column">
            <h5 class="card-title d-flex" style="gap:5px">Flag<i class="bi bi-flag-fill"></i></h5>
            <p class="card-text d-flex justify-content-center align-items-center">
            <div class="input-group mb-3">
                <input id="flaginput" type="text" class="form-control" placeholder="Enter the flag"
                    aria-label="Flag enter" aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="enterflag">Enter</button>
            </div>
            <p class="mb-1" style="font-size: small;">All flags are formatted dctf{sometext}</p><br>
            <p class="mb-1" style="font-size: x-small;">If you have any issues, try common troubleshooting tips or contact us</p>
            </p>
        </div>
    </div>
</div>
<div id="challengeSection" class="col-9" style="padding: 5px;">
    <div class="chall-divider"></div>

    <div id="result" class="container d-flex justify-content-center align-items-center flex-column" style="height: 100%;">
        <div id="flagResult" style="width: 100%;">

        </div>
    </div>
</div>
</div>
`


$('#nextSection').on("click", ()=>{

    if(i>=Object.keys(sections).length){
        i = 0;
        location.reload();
    }

    $("#tutorialText").text(sections[i].text)
    $("#tutorialCard").css("top", `${sections[i].position.top}%`);
    $("#tutorialCard").css("left", `${sections[i].position.left}%`);

    if(i==4){
        $("#tutorialContent").html(challengeHTML)
        $("#tutorialContent").removeClass("container mt-2")
        $("#tutorialContent").addClass("container-fluid d-flex flex-row fill-height")
        $("#body").css("height", "100vh")
    }
    i+=1

})