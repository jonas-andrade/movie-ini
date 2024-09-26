import React from 'react';
import './styles.css'; 
import Menu from './components/Menu';
import Movie from './components/Movie';
import { movieApi } from './service/api';

const App = ()=> {
    return (
       
           <div className='container'>
            <Menu />
            <h1>Tecnologia, Sci-Fi e Tendências do Futuro</h1>

              <h2>Ação</h2>
              <Movie/>
            
                
 
           </div>
        
    )
}

export default App;