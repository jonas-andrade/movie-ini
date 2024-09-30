import React, { useEffect, useState } from 'react';
import { TMDB } from '../service/api';

const genreMap = {
    28: 'Ação',
    12: 'Aventura',
    16: 'Animação',
    35: 'Comédia',
    80: 'Crime',
    99: 'Documentário',
    18: 'Drama',
    10751: 'Família',
    14: 'Fantasia',
    36: 'História',
    27: 'Terror',
    10402: 'Música',
    9648: 'Mistério',
    10749: 'Romance',
    878: 'Ficção Científica',
    10770: 'Filme de TV',
    53: 'Thriller',
    10752: 'Guerra',
    37: 'Faroeste'
};

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [groups, setGroups] = useState({});
    const [scrollPositions, setScrollPositions] = useState({});

    useEffect(() => {
        const getMovies = async () => {
            const data = await TMDB.fetchMoviesData();
            if (data && data.movies) {
                setMovies(data.movies);
                setGroups(groupMoviesByGenre(data.movies)); // Agrupando filmes por gênero
            }
        };
        getMovies();
    }, []);

    const groupMoviesByGenre = (movies) => {
        const groups = {};

        movies.forEach((movie) => {
            const genres = movie.genre_ids.map((id) => genreMap[id]);
            genres.forEach((genre) => {
                if (!groups[genre]) {
                    groups[genre] = [];
                }
                groups[genre].push(movie);
            });
        });

        return groups;
    };

    const handleMouseMove = (event, genre) => {
        const carousel = event.currentTarget;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        const mouseX = event.clientX - carousel.getBoundingClientRect().left;
        const scrollPercentage = mouseX / carousel.clientWidth;
        const newScrollPosition = scrollPercentage * maxScrollLeft;

        setScrollPositions((prevPositions) => ({
            ...prevPositions,
            [genre]: newScrollPosition
        }));
    };

    const baseImageUrl = 'https://image.tmdb.org/t/p/w500'; // URL base para imagens do TMDB

    return (
        <div className='movie-container'>
            {Object.entries(groups).length > 0 ? (
                Object.entries(groups).map(([genre, movies]) => (
                    <div key={genre} className="genre-section">
                        <h1>{genre}</h1>
                        <div
                            className="movies"
                            onMouseMove={(event) => handleMouseMove(event, genre)}
                            style={{
                                transform: `translateX(-${scrollPositions[genre] || 0}px)`,
                                transition: 'transform 0.3s ease-out' // Rolagem suave
                            }}
                        >
                            {movies.map((movie) => (
                                <section key={movie.id} className="section-movie">
                                    <div className="poster_and_titulo">
                                        <img
                                            src={`${baseImageUrl}${movie.poster_path}`} // URL completa da imagem
                                            alt={movie.title}
                                        />
                                        <h3>{movie.title}</h3>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>Dados inexistentes!</p>
            )}
        </div>
    );
};

export default Movie;
