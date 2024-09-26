
import React, { useEffect, useState, useRef  } from 'react';
import { movieApi } from '../service/api';





const Movie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // Chama a função que busca os dados da API
        const getMovies = async () => {
            const data = await movieApi.fetchMoviesData();
            if (data && data.movies) {
                setMovies(data.movies); // Define os filmes no estado
            }
        };
        getMovies();
    }, []);

    const movieListRef = useRef(null); // Criando uma referência para o contêiner da lista de filmes

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
                        {/* {movie.genre_ids === 99 ? <h2>Ficção Ciêntifica</h2> : <h2>Ação</h2>} */}
                        <img src={`${movie.poster_path}`} alt={movie.title} />
                        <p>{movie.title}</p>
                    </section>
                )) : <p>Dados inexistentes!</p>}
            </div>
        </div>
    );
};

export default Movie;