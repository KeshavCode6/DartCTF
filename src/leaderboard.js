const leaderboard = document.querySelector("#leaderboard-body");
var filterIndex = 0;

const filterToName = {
    0:"Top Global",
    1:"Top Country"
}
const showLeaderboard = (filter) =>{
    for (var i = 1; i <= 100; i++) {

        const lbUserHtml = `
        <th scope="row">#${i}</th>
        <td>John</td>
        <td></td>
        <td>U.S</td>
        `
    
        const element = document.createElement("tr");
        element.innerHTML = lbUserHtml;
    
        leaderboard.appendChild(element);
    }
}

$("#editFilters").on("click", ()=>{
    filterIndex+=1;
    if(filterIndex>1){
        filterIndex = 0
    }
    $("#editFilters").text(filterToName[filterIndex])

    $("#leaderboard-body").empty()
    showLeaderboard();
    fetch('/getLeaderboard')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
})
showLeaderboard();