import axios from 'axios';

// URL base e token de acesso
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjIzNzIzN2NlOTliZGViNjk4MDk1MDcyY2IxNCIsIm5iZiI6MTcyNzE4Nzc5Ny42NTkwODIsInN1YiI6IjY2ZWY2Y2VkYzIzNzI1OGU0YzI2MTcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdn6CP1Uns_RJhxxloqgNAiVez7WTmjxl6tB57v01Z0';

// Configurações de cabeçalhos para a requisição
const options = {
    method: "GET",
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

// Função que busca os dados da API e retorna um objeto com os filmes
const fetchMoviesData = async () => {
    try {
        const response = await axios(BASE_URL, options);
        return {
            movies: response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                genre_ids: movie.genre_ids, 
                popularity: movie.popularity
            }))
        };

    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return { error: 'Erro ao buscar filmes' };
    }
};


export const TMDB = {
    fetchMoviesData
};
