
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjIzNzIzN2NlOTliZGViNjk4MDk1MDcyY2IxNCIsIm5iZiI6MTcyNzE4Nzc5Ny42NTkwODIsInN1YiI6IjY2ZWY2Y2VkYzIzNzI1OGU0YzI2MTcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdn6CP1Uns_RJhxxloqgNAiVez7WTmjxl6tB57v01Z0';








const Movie = ()=>{
    /* definier variaveis onde os dados será guradado para uso no frontend */
    const [movies ,setMovies] = useState([]);

    /* definir função de busca dos dados da api para jogar no (useState)(async-await)(axios/fetch)(try-catch) */
    const fetchMovies = async()=>{
        const response = await axios.get(BASE_URL,{
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
            
        });
        setMovies(response.data.results || []);

    }
     /* executa a função async do passo 2 com (useEffetc) */
    useEffect(()=>{fetchMovies();},[]);

    return(
        <section className='section-movie'>
        {movies.length > 0 ? movies.map((movie)=>(
            <div key={movie.id}>
                <h3>{movie.title}</h3>

                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='..' ></img>
                    <p>{movie.overview}</p>

            </div>
        )) : <p>Dados inexistentes!</p>}
  
    </section>
    )
}
export default Movie;