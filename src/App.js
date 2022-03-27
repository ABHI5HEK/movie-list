import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Navbar from './Components/navbar/Navbar';
import { Body } from './Components/Body';
import data from'./assets/data.json';
import { HomePostComponent } from './Components/HomePostComponent';

function App() {
  const [movie,setMovie] = useState([]);
  const [initialCheck,setInitialCheck] = useState([]);
  console.log("data",data);
  useEffect(() => {
    //Runs only on the first render
    setInitialCheck("noapi")
    setMovie(data);
  }, [data]);
  const fetchMovies=(text)=>{
    axios.get(`http://www.omdbapi.com/?s=${text}&apikey=e0d96d01`).then((response)=>{
      let searchData = response.data.Search || [];
     setMovie(searchData)
     setInitialCheck("fromapi")
    })
}
  return (
    <>
    <Navbar fetchMovies={fetchMovies}/>
    {initialCheck=="fromapi"?<Body movie={movie}/> :<HomePostComponent movie={movie}/>
    
    }
    {console.log(initialCheck=="fromapi")}
    
      {/* <button onClick={fetchMovies}>Fetch Movies</button> */}
     
    </>
      
    
  );
}

export default App;
