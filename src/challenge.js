$("#enterflag").on('click', ()=>{
    var flag = $("#flaginput").val();
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
          console.log(data)
        })
        .catch(error => {
          console.error('Error checking authentication:', error);
        });
    }
    else{
        alert("Flag Input is empty")
    }
});