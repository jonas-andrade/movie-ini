import React from "react";
import data from "../service/api";
data();
const Filmes = ()=>{
    return(
        <div className="galeria_filmes">
        <h2>Categoria</h2>
        <img src="https://avatars.githubusercontent.com/u/63979333?s=96&v=4" alt="1" />
        <p>titulo do filme</p>
        </div>
    )
}
export default Filmes;