import axios from 'axios';

// URL base e token de acesso
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjIzNzIzN2NlOTliZGViNjk4MDk1MDcyY2IxNCIsIm5iZiI6MTcyNzE4Nzc5Ny42NTkwODIsInN1YiI6IjY2ZWY2Y2VkYzIzNzI1OGU0YzI2MTcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdn6CP1Uns_RJhxxloqgNAiVez7WTmjxl6tB57v01Z0';

// Configurações de cabeçalhos para a requisição
const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

// Função que busca os dados da API e retorna um objeto com os filmes
const fetchMoviesData = async () => {
    try {
        const response = await axios.get(BASE_URL, options);

        // Retornando o objeto com todos os dados dos filmes
        return {
            movies: response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                release_date: movie.release_date,
                poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                vote_average: movie.vote_average,
                genre_ids: movie.genre_ids, // Gêneros por ID (pode ser convertido para nomes, se necessário)
                popularity: movie.popularity
            })),
            total_results: response.data.total_results,
            total_pages: response.data.total_pages,
            page: response.data.page
        };
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return { error: 'Erro ao buscar filmes' };
    }
};

// Exportando a função que pode ser chamada em outro lugar
export const movieApi = {
    fetchMoviesData
};
