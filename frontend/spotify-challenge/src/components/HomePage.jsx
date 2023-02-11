import React from 'react'
import '../styles/HomePage.scss'
import Spotify from 'react-spotify-embed';
import Yawn from './Yawn';
import Stomp from './Stomp';
import Zane from './Zane';
 const  HomePage = () =>{
    



    return(

      <div className="container">
         <div class="a"></div><div id="circle"></div>
        <div className="yawn">
            <div className='yawn-header'>
                <h1>Yawn's Songs</h1>
            </div>
            <div className="yawn-songs">
                <Yawn></Yawn>
            </div>
        </div>
        <div className="stomp">
            <div className='stomp-header'>
                <h1>Stomps's Songs</h1>
            </div>
            <div className="stomp-songs">
                <Stomp></Stomp>
            </div>
        
        </div>
        <div className="zane">
            <div className='zane-header'>
                <h1>Zane's Songs</h1>
            </div>
            <div className="zane-songs">
                <Zane></Zane>
            </div>
        
        </div>
      </div>
    
      
      );
      
}
export default HomePage;