const leaderboard = document.querySelector("#leaderboard-body");

const showLeaderboard = (data) =>{
    for (var i = 0; i < Object.keys(data).length; i++) {
        
        username = Object.keys(data)[i]

        const lbUserHtml = `
        <th scope="row">#${i+1}</th>
        <td>${data[username][0]}</td>
        <td>${username}</td>
        <td>${data[username][1]}</td>
        `
    
        const element = document.createElement("tr");
        element.innerHTML = lbUserHtml;
    
        leaderboard.appendChild(element);
    }
}
const UpdateLeaderboard = ()=>{
    fetch('/getLeaderboard')
    .then(response => response.json())
    .then(data => {
        showLeaderboard(data);
    })
    .catch(error => {
      console.error('Error checking authentication:', error);
    });
}

$(document).ready(()=>{
    UpdateLeaderboard();
})