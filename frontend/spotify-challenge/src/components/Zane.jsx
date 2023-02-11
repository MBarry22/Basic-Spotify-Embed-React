import React from 'react'
import '../styles/HomePage.scss'
import Spotify from 'react-spotify-embed';
 const  Zane = () =>{
    



    return(

      <div className="container">
        <div className="zaney-songs">
        <Spotify link='https://open.spotify.com/track/30KctD1WsHKTIYczXjip5a?si=ffbcc281cb8c4b44' />
        <Spotify link='https://open.spotify.com/track/393MDhe62s8hbH8ETrlxe5?si=002ff9a185e14d1f' />
        <Spotify link='https://open.spotify.com/track/3azJifCSqg9fRij2yKIbWz?si=e8d8cca7837f4695' />
        <Spotify link='https://open.spotify.com/track/0OgGn1ofaj55l2PcihQQGV?si=e092a379b0b2453d' />
        <Spotify link='https://open.spotify.com/track/0vjeOZ3Ft5jvAi9SBFJm1j?si=d631ca5c8dc349ed' />

        </div>
      </div>
    
      
      );
      
}
export default Zane;