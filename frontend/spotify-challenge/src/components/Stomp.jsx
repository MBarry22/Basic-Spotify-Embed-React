import React from 'react'
import '../styles/HomePage.scss'
import Spotify from 'react-spotify-embed';
 const  Stomp = () =>{
    



    return(

      <div className="container">
        <div className="stompy-songs">
        <Spotify link='https://open.spotify.com/track/7vgTNTaEz3CsBZ1N4YQalM?si=d4c345adccaa400a' />
        <Spotify link='https://open.spotify.com/track/7xUHoxv2EyFQeLLxYbKH9h?si=d8a61e2ae5334273' />
        <Spotify link='https://open.spotify.com/track/1G391cbiT3v3Cywg8T7DM1?si=55bff209a2dc49b5' />
        <Spotify link='https://open.spotify.com/track/3WMj8moIAXJhHsyLaqIIHI?si=89f9ce2ed2084afe' />
        <Spotify link='https://open.spotify.com/track/7dFGkZbmm6cVlI28bfMaWE?si=de3dcc1863c94443' />

        </div>
      </div>
    
      
      );
      
}
export default Stomp;