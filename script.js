
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('anime-query').value;
    if (query.trim()) {
        fetchAnimeData(query);
    }
});

function fetchAnimeData(query) {
    const apiKey = 'wikenn';
    const url = `https://lolhuman.xyz/api/anime?apikey=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                const result = data.result;

                // Mengisi elemen-elemen dengan data anime
                document.getElementById('anime-title').textContent = result.title.romaji;
                document.getElementById('anime-cover').src = result.coverImage.large;
                document.getElementById('anime-format').textContent = result.format;
                document.getElementById('anime-episodes').textContent = result.episodes;
                document.getElementById('anime-duration').textContent = result.duration;
                document.getElementById('anime-status').textContent = result.status;
                document.getElementById('anime-season').textContent = result.season;
                document.getElementById('anime-year').textContent = result.seasonYear;
                document.getElementById('anime-genres').textContent = result.genres.join(', ');
                document.getElementById('anime-description').innerHTML = result.description;

                // Menampilkan kontainer anime
                document.getElementById('anime-container').style.display = 'block';
            } else {
                alert('Anime tidak ditemukan!');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Gagal mengambil data dari API');
        });
}
