const urlParams = new URLSearchParams(window.location.search);
const board = urlParams.get("board");

fetch('/getLevels', {
    method: 'POST', // Assuming you're sending a POST request
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"category": board})
})
.then(response => response.json())
.then(data => {
    totalLevels = 0
    Object.keys(data).forEach(element => {
        levelSlot = `
        <div class="col-md-2 mb-2"> 
        <div class="card h-60 c1" id="chall-card" style="margin: 0px; min-width: 200px;">
                <div class="card-body d-flex align-items-center flex-column">
                    <h5 class="card-title d-flex justify-content-between align-items-center" id="L1C1">
                        <span style="margin-right: 12px;">${element}</span>
                        <button id="playCyber" class="btn btn-outline-primary btn-sm">Play</button>
                    </h5>
                    <p class="card-text d-flex justify-content-center align-items-center">
                        <img src="../../resources/icons/unsolved.png" style="width: 75%;"
                            class="img-thumbnail" alt="...">
                        <p class="level-name" style="font-size: 15px; font-weight: 600; margin-bottom: 0px;">${data[element]["name"]}</p>
                        <p class="level-points" style="font-size: 15px; font-weight: 600; margin-bottom: 0px; color: darkred;">${data[element]["points"]}pts</p>
                    </p>
                </div>
            </div>
        </div>       
        ` 
        
        if (totalLevels>=4){
            $("#row1").append(levelSlot)
        }
        else{
            $("#row2").append(levelSlot)
        }
        totalLevels+=1
    });
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
