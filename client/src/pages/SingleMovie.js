import {useApi} from "../hooks/useApi"
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import React, { useRef } from 'react';



export const SingleMovie =()=>{
    const { id } = useParams();
    const { movies,fetchOneMovie } = useApi();

    const iframeRef = useRef(null);

    const enterFullscreen = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe && iframe.mozRequestFullScreen) { /* Firefox */
        iframe.mozRequestFullScreen();
      } else if (iframe && iframe.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        iframe.webkitRequestFullscreen();
      } else if (iframe && iframe.msRequestFullscreen) { /* IE/Edge */
        iframe.msRequestFullscreen();
      }
    };





    useEffect(()=>{
        fetchOneMovie(id)
    },[id])
    return(
        <>

   <div className="movie-grid"> 

   <div className="iframe">   
   <iframe 
    ref={iframeRef}
   src={movies.link} title="YouTube video player" frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen>

   </iframe>
   </div> 


   <div className="desc">
   <div className="movie-desc">
    <h1>{movies.title}</h1>
    <h2>{movies.year}</h2>
    <p>Note :Press the esc key if you want to exit full screen</p>
    <button className="search-btn"onClick={enterFullscreen}>Watch in Fullscreen</button>
   </div>
   </div>


   </div>
        </>
    )

}