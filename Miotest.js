

fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc", {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f045add73amsh54c69510dd5b415p1ed7ddjsn4ec0b7320016',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }

}).then(response => response.json()).then(data => console.log(data)).catch(err => {console.log(err)});