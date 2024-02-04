fetch('/getLoginInfo')
.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(error => {
  console.error('Error checking authentication:', error);
});

console.log("hello")