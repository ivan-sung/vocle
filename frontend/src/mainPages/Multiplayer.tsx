import React, { useState, useEffect, SetStateAction, Component } from 'react'
import 'react/jsx-runtime'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Question from '../overlays/Questionssingleplayer';
import Dropdown from '../gameComponents/Dropdown';
import Home from './Home';
import { MultiTimer } from '../timer/timer';
import GoHome from '../navigateHome';
import AddSongMultiplayer from '../gameComponents/addGuessmultiplayer'


class Multiplayer extends Component {

    render() {
        // Gets the text from the dropdown bar
        function submitSong() {
            const text: Element | null = document.getElementById("dropdown_class")
            if (text == null) {
                console.log("No text in the text box")
            } else if (!(text instanceof HTMLDivElement)) {
                console.log(`Found element ${text}, but it wasn't an input`)
            } else {

                console.log(text.textContent)

            }
            console.log("submit called")
        }



        return (
            <div className="multiplayer" aria-label="This is the page for multiplayer Vocle">
                <MultiTimer />
                <div className="dropdown_bar" aria-label="Input your guess here">
                    <Dropdown />
                    <div className="bottom_of_page" >
                    </div></div>
                <AddSongMultiplayer />
                {/* <button className="submit_button_multi" aria-label="Click here to submit your guess">
                    <div className="submit_button_multi_background">
                    </div><span className="submit_button_multi_label" role="Submit" aria-label={TEXT_Submit_button} onClick={submitSong}>SUBMIT</span></button> */}
                
                
                <div><GoHome /></div>
                </div>

        )

    }
}

export default Multiplayer;