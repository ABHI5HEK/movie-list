import React from 'react'
import { useState } from 'react';

export const Body = (props) => {
    // const [movie,setMovie] = useState([]);
    // setMovie(props.movie)
  return (
    <div className='container-fluid my-auto mx-auto'>
           <div className='row justify-content-md-center'>
               {
           props.movie.map((value,index )=>{
            return (
            <div className="card my-3 mx-3" style={{width: "16rem"}}>
            <img src={value.Poster} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">{value.Year}</h5>
              <p className="card-text">{value.Title}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          );
        })
        }
           </div>

       </div>
  )
}
