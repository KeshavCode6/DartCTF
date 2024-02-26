const urlParams = new URLSearchParams(window.location.search);
const board = urlParams.get("board");
const challId = parseInt(urlParams.get("id"));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

document.title = `${capitalizeFirstLetter(board)} C${challId}`;

fetch('/getLevelData', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({"category": board, "challId": challId})
})
.then(response => response.json())
.then(data => {
  console.log(data);

  const {name, challId, difficulty, desc, res} = data;
  $(".challname").text(`${capitalizeFirstLetter(board)} C${challId}`);
  $(".challdiff").text(`Difficulty: ${capitalizeFirstLetter(difficulty)}`);
  $("#challdesc").text(desc);
  
  for (var r of res) {
    const ulItem = document.createElement("li");
    ulItem.innerText = r;
    $(".challres").append(ulItem);
  }

})

fetch('/getLevelHtml', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({"board": board, "chall": challId})
})
.then(response => response.text())
.then(data => {
  $("#result").html(data);
})

$("#enterflag").on('click', ()=>{
    var flag = $("#flaginput").val();
    if(flag.length>0){
        fetch('/enterFlag', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'flag':flag, "url":window.location.href})
        })
        .then(response => response.json())
        .then(data => {
          
          let color = "primary"
          $("#result").empty()
          console.log(data)

          if(!data.success){
            color = "success"
          }

          const alert = `
            <div class="alert alert-${color} alert-dismissible fade show" role="alert">
            ${data.msg}
            <button type="button" class="close btn btn-close" data-dismiss="alert" aria-label="Close"></button>
            </div>
          `

          $("#result").append(alert)
        })
        .catch(error => {
          console.error('Error checking authentication:', error);
        });
    }
    else{
        alert("Flag Input is empty")
    }
});