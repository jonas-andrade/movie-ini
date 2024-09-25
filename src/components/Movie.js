
import React, { useEffect, useState, useRef  } from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjIzNzIzN2NlOTliZGViNjk4MDk1MDcyY2IxNCIsIm5iZiI6MTcyNzE4Nzc5Ny42NTkwODIsInN1YiI6IjY2ZWY2Y2VkYzIzNzI1OGU0YzI2MTcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdn6CP1Uns_RJhxxloqgNAiVez7WTmjxl6tB57v01Z0';







const Movie = () => {
    const [movies, setMovies] = useState([]);
    const movieListRef = useRef(null); // Criando uma referência para o contêiner da lista de filmes

    const fetchMovies = async () => {
        try {
            const response = await axios.get(BASE_URL, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });
            setMovies(response.data.results || []);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    // Função para rolar a lista de filmes ao mover o mouse
    const handleMouseMove = (e) => {
        if (movieListRef.current) {
            const { clientX } = e;
            const { offsetWidth, scrollWidth } = movieListRef.current;
            const scrollPosition = (clientX / window.innerWidth) * (scrollWidth - offsetWidth);
            movieListRef.current.scrollLeft = scrollPosition;
        }
    };

    return (
        <div className='movie-container' onMouseMove={handleMouseMove}>
            <div className='movie-list' ref={movieListRef}>
                {movies.length > 0 ? movies.map((movie) => (
                    <section key={movie.id} className='section-movie'>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                    </section>
                )) : <p>Dados inexistentes!</p>}
            </div>
        </div>
    );
};

export default Movie;