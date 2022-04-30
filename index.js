


fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
  .then(response => response.json())
  .then(data => {
      console.log(data.urls.full)
     document.body.style.backgroundImage = `url(${data.urls.full})`
    });


