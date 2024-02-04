import {Search} from "./Search"

import {Movies} from "../../data/Movies"

//Search Context

import { SearchContext } from "../../context/SearchContext";

//search functionality
import {useSearch} from '../../hooks/SearchHook';

export const Main=()=>{



const { search, searchMovie,getMovie, searchedMovie } = useSearch();

    return(
        <>
        <div className="movie-container">
      
<SearchContext.Provider value={searchedMovie}>
<Search search={search} searchedMovie={searchedMovie} searchMovie={searchMovie} getMovie={getMovie} />
</SearchContext.Provider>
     
      



        </div>
      
       
        </>
    )
}