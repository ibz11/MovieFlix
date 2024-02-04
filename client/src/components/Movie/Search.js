import { useState ,useEffect} from 'react';
import {Card} from "./Card"


//Hook Api
import {useApi} from "../../hooks/useApi"
//Search Context
import {  useContext  } from "react";
import { SearchContext } from "../../context/SearchContext";

import Axios from 'axios'
import {Loading} from '../Loading'
// import {NotFound} from './pages/404'


//redirect

import { redirect } from 'react-router-dom';
export const Search=(props)=>{

const searchData = useContext(SearchContext);


// useEffect(()=>{
// fetchMovies()
// },[])

// useEffect(()=>{
//  response()
// },[])

const { movies,isLoading,isError,fetchMovies } = useApi();


  if (isLoading) {
    // Render a loading animation or message while fetching data
    return <Loading/>;
  }
  
  if(isError){
    // console.log("myError",isError)
    // return  redirect("/404");
  
  }



return(
        <>

        {/* Search Section */}

        <div className="search container">

        <h1>{props.search ?props.search:"Movies For You"}</h1>

        <input className="search-input" onChange={(e)=>
        { props.searchMovie(e.target.value)   }}
        placeholder="What are you watching?"/>

        <button className="search-btn" onClick={props.getMovie}>Search</button>
        
        </div>




        {/* Card section */}
        
        <div className="card-grid">
       
        <Card  searchData={searchData} Movies={movies}/>
       
       
          </div>





        </>
    )
}