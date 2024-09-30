import React from 'react';
import './styles.css'; 
import Menu from './components/Menu';
import Movie from './components/Movie';


const App = ()=> {
    return (
    
           <div className='container'>
            <Menu />
            <Movie/>
           </div>
        
    )
}

export default App;