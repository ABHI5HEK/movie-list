import React from 'react'

export const HomePostComponent = (props) => {
  return (
    <div className='container-fluid my-auto mx-auto'>
           <div className='row justify-content-md-center'>
               {
           props.movie.map((value,index )=>{
            return (
            <div className="card my-3 mx-3" style={{width: "16rem"}}>
            <img src={value.img.src} alt={value.img.alt} className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">#{value.id} - {value.title} ({value.year}) </h5>
              <p className="card-text">{value.distributor}</p>
              <p className="card-text">{value.amount}</p>
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
