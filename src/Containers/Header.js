import React, { useState } from 'react';
import './Header.css';



const Header = ({ setSearch }) => {
  const [query,setQuery]=useState("")

  function imagesearch(e){
    e.preventDefault();
    setSearch(query);
    console.log("Searching image of ",query);
  }

  return (
    <>
    <div className='header'>
        <h1>Image Pool Generator</h1>
    
    </div>


    <div className='searchbox'>
        <input type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
        />
        <button  className='searchButton' onClick={imagesearch}>Submit</button>
    </div>
    

    </>
  )
}

export default Header