

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjIzNzIzN2NlOTliZGViNjk4MDk1MDcyY2IxNCIsIm5iZiI6MTcyNzE4Nzc5Ny42NTkwODIsInN1YiI6IjY2ZWY2Y2VkYzIzNzI1OGU0YzI2MTcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wdn6CP1Uns_RJhxxloqgNAiVez7WTmjxl6tB57v01Z0';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + ACCESS_TOKEN,
    },
};



    
     

const api = ()=>{

    
     fetch(`${BASE_URL}/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc`, options)
    .then(response => response.json())
    .then((response)=>{
        
        console.log(response)
    })
    .catch(err=>console.log(err));
}

export default api;