const urlFetch = 'https://whatyearisit-backend-gilt.vercel.app'



fetch(`${urlFetch}/year`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('year').textContent = data.year
    })

