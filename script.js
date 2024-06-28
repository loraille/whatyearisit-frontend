const urlFetch = 'http://whatyearisit-backend-ruby-phi.vercel.app'
//whatyearisit-backend-ruby-phi.vercel.app

fetch(`${urlFetch}/date`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('year').textContent = data.year
    })

