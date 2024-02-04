import {useState,useEffect} from 'react'
// import {Movies} from "../data/Movies"
import Axios from 'axios'


//useApi hook
import {useApi} from "./useApi"

export const useSearch=()=>{
    const [search,setSearch]=useState('')
    const [searchedMovie,setMovies]=useState([])

    const { movies,fetchMovies } = useApi();
    //Multi search
     const keys=["title","year"]

    useEffect(()=>{
        fetchMovies()
        },[])

    const searchMovie=(searchData)=>{
        setSearch(searchData)

    }//Not used

    const getMovie=()=>{
        let filteredMovies =movies.filter(  (movie)=>
        keys.some(   (key)=>movie[key].toLowerCase().includes(search.toLowerCase())        )
       );
           //  movies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase())

        // search?Movies.filter(item => item.title.includes(search)):'Searching...';  
        
        // 
      
    setMovies(filteredMovies)

    console.log(searchedMovie)
    }

    useEffect(() => {
        
        getMovie()
    }, [search]);
    return {
        search,
        setSearch,
        searchMovie,
        searchedMovie,
        getMovie
      };


}

