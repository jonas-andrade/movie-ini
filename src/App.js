import React, { useEffect, useState } from 'react';
// import './styles.css'; 
import Menu from './components/Menu';
import Movie from './components/Movie';
import { movieApi } from './service/api';

const App = ()=> {

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


    return (
       
           <div className='container'>
            {/* <Menu />
            <h1>Tecnologia, Sci-Fi e Tendências do Futuro</h1>

            <Movie/> */}
              <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title} {/* Exibe o título do filme */}
                    </li>
                ))}
            </ul>       
 
           </div>
        
    )
}

export default App;