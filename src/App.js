import React from 'react';
import './styles.css'; 
import Menu from './components/Menu';
import Movie from './components/Movie';


const App = ()=> {
    return (
       
           <div className='container'>
            <Menu />
            <h1>Tecnologia, Sci-Fi e Tendências do Futuro</h1>

            <Movie/>
       
 
           </div>
        
    )
}

export default App;