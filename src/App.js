import React from 'react';
import './styles.css'; 
import Menu from './components/Menu';
import Filmes from './components/Filmes';


const App = ()=> {
    return (
       
           <div className='container'>

            <Menu />
            {/* <h1>Tecnologia, Sci-Fi e Tendências do Futuro</h1> */}
          
           </div>
        
    )
}

export default App;