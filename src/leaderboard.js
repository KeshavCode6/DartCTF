const leaderboard = document.querySelector("#leaderboard-body");

for (var i = 1; i <= 100; i++) {

    const lbUserHtml = `
    <th scope="row">#${i}</th>
    <td>John</td>
    <td>U.S</td>
    `

    const element = document.createElement("tr");
    element.innerHTML = lbUserHtml;

    leaderboard.appendChild(element);

}