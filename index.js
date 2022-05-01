


fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then(response => response.json())
  .then(data => {
      console.log(data.user.first_name)
     document.body.style.backgroundImage = `url(${data.urls.regular})`
     document.getElementById("author").innerHTML = `
     <p>${data.user.first_name} ${data.user.last_name}</p>
    

     `
    });


