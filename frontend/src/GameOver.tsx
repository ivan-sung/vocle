import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./GameOver.css";

export default function GameOverScreen({isGameOver}: {isGameOver: boolean}) {
    const [imageURL, setImageURL] = useState('')
    const [songTitle, setSongTitle] = useState('')
    const [artistName, setArtistName] = useState('')

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/', {state:{id:1,name:'default'}})
    }
    const navigateSingleplayer = () => {
        {window.location.reload();}
        console.log('back to singleplayer')
    }

    //need to set imageURL, songTitle, and artistName thru API calls to the backend.

    
    return (
        <div className="game-over-screen" id = "game-over-screen" aria-label = "game over screen">
            {/* album cover will be retrieved from API call */}
            <img className="album-cover" id = "album-cover" src = "https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg"></img>
            {/* song name and artist will be retrieved from API call */}
            <p className="song-name">Shoota (feat. Lil Uzi Vert)</p>
            <p className="artist-name">Playboi Carti</p>
            <div className="return-home-class" onClick={navigateHome}>
                <div className="return-home-button" ></div>
                <span className="home-button-label" aria-label="home button">Home</span></div>
                <div className="play-again-class" aria-label="play again button" onClick={navigateSingleplayer}>
                    <div className="play-again-button" id = "play again button"></div>
                    <span className="play-again-label" id = "play again label">Play Again</span></div>
                {/* <div className="share-button-class">
                        <div className="share-button"></div>
                        <span className="share-button-label">Share</span>
                        </div> */}
                    <div className="better-luck-class"><div className="v182_74"></div><span className="better-luck-label">You didn't get this Vocle. Better luck next time!</span></div>
        </div>
    )
    
    
}