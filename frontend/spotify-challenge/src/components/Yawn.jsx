import React from 'react'
import '../styles/HomePage.scss'
import Spotify from 'react-spotify-embed';
 const  Yawn = () =>{
    



    return(

      <div className="container">
        <div className="yawny-songs">
        <Spotify link='https://open.spotify.com/track/50dm7aZGrfteCHvaO1fTn5?si=4277cab7de2149f6' />
        <Spotify link='https://open.spotify.com/track/6A59t2ypOmp9x7iFIVMjyc?si=f145c954fb084064' />
        <Spotify link='https://open.spotify.com/track/1k5HwypGDCneWOu2nXE88T?si=30fea7a83055484e' />
        <Spotify link='https://open.spotify.com/track/7zqhAV0q62L7WT9puEfg4l?si=61908ad2d56c4cff' />
        <Spotify link='https://open.spotify.com/track/1j9woC5YVGXcQEVcelh0M8?si=709bbe91f3844e3a' />

        </div>
      </div>
    
      
      );
      
}
export default Yawn;