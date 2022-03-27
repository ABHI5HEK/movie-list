import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Navbar = (props) => {
    const [text,setText] = useState("Search here");
    const onChangeText=(event)=>{
        props.fetchMovies(event.target.value)
    }
  return (
<>
<nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand">Movie List</a>
    <form className="d-flex" >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={onChangeText}/>
      <button className="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>
</nav>
      
</>
  
  )
}

export default Navbar;
