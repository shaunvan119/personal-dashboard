


fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then(response => response.json())
  .then(data => {
      console.log(data.urls.full)
     document.getElementById("background-image").style.background = `url(https://images.unsplash.com/photo-1500829243541-74b677fecc30?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTEzMDIwNTY&ixlib=rb-1.2.1&q=85)`
    });


