import {useQuery} from '@tanstack/react-query'
import Axios from 'axios'
import {useState} from 'react'



export const useApi=()=>{

    const [movies,setMovies]=useState([])


    const {data,isLoading,isError}=
    
      useQuery({queryKey:["data"] ,queryFn:async ()=>{
          try {
            
    //   return Axios.get('http://localhost:5500/api/').
      return Axios.get('http://localhost:5500/api').
      then((res)=>setMovies(res.data))
        }
         catch(error){
         throw error;
      }}})
  
   

    //replace it with useQuery
    const fetchMovies=async()=>{
        try{
            const res=await Axios.get('http://localhost:5500/api/')
            // const res=await Axios.get(`http://localhost:5500/api/`)
            if(!res.data){
                console.log('Error fetching data')
            }
            else{
                setMovies(res.data)
            }
            
            console.log(res.data)
        }
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
        
    }


    const fetchOneMovie=async(query)=>{
        try{
            // const res=await Axios.get(`http://localhost:5500/api/${query}`)
            const res=await Axios.get(`http://localhost:5500/api/${query}`)
            if(!res.data){
                console.log('Error fetching data')
            }
            else{
                setMovies(res.data)
            }
            
            console.log(res.data)
        }
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
        
    }













    return  {movies,isLoading,isError,fetchMovies,fetchOneMovie}
}