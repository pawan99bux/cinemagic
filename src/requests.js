const API_KEY = "0cdedde2e38f0cd2c94b10bb02b06ff6";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

}

export default request;
