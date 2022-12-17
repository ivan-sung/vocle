import React, { useState, KeyboardEvent, SetStateAction, Component, useEffect } from 'react'
import 'react/jsx-runtime'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Question from '../overlays/Questionssingleplayer';
import Dropdown from './Dropdown';
import Home from '../mainPages/Home';
import { render } from '@testing-library/react';
import { ListComponent } from './listComponent';
import { stringify } from 'querystring';
import { generateTrack, generateAccessToken } from '../audioImplementation/GenerateSong';
import { keyboardKey } from '@testing-library/user-event';

export const TEXT_Submit_button = "Submit-button"


function AddSongMultiplayer() {
    var [service, setService] = useState<{song: string, key: string }[]>([]);
    let key = 'none'
   
    let array = new Map<string, string>()
    array.set('p', 'User2(p)')
    array.set('q', 'User1(q)')
    array.set('z', 'User3(z)')
    array.set('m', 'User4(m)')
    // {
    //   'p': 'User2(p)',
    //   'q': 'User1(q)',
    //   'z': 'User3(z)',
    //   'm': 'User4(m)'
    // }

    useEffect(() => {
      const handleKeyPress: EventListener = (event: KeyboardEventInit) => {
        console.log(key === 'none')
      if(event.key !== undefined && array.get(event.key) !== undefined)
      {
      if(key === 'none')
      {
        if (event.key === 'q') {
            key = 'q'
            console.log(key)
        }
        if (event.key === 'p') {
          key = 'p'
          console.log(key)
        }
       if (event.key === 'm') {
        key = 'm'
        console.log(key)
       }
        if (event.key === 'z') {
          key = 'z'
        console.log(key)
      }
    }
  }
      };
  
      document.addEventListener('keydown', handleKeyPress);
  
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    const handleServiceAdd = () => {
      console.log("song called")
      // Resets newSong
      let newSong = '';
      // Gets the text from the dropdown
      const text: Element | null = document.getElementById('dropdown_class')
      if (text == null) {
        console.log("No text in the text box")
  
      } else if (!(text instanceof HTMLDivElement)) {
        console.log(`Found element ${text}, but it wasn't an input`)
      } else {
        // Checks that the text is of type string before storing its value
        if (typeof text.textContent === 'string') {
          newSong = text.textContent
        }
        // If the input text isn't simply the placeholder text
        if (newSong !== 'Know the song? Search for the artist/title') {
          if (service.length < 6) {
            setService([...service, { song: newSong, key }]);
            console.log(newSong, key)
            console.log(array.get(key))
            array.delete(key)
            console.log(array.get(key))
            key = 'none'
          } else {
            service.splice(0, service.length);
            // TODO: Add method for bringing up the modal and ending the round
          }
        }
      }
  
    };

  
return(
    <><button className="submit_button_multi" aria-label="Click here to submit your guess">
    <div className="submit_button_multi_background">
    </div><span className="submit_button_multi_label" role="Submit" aria-label={TEXT_Submit_button}  onClick={handleServiceAdd}>SUBMIT</span>
  </button><div className="multi_guesses"></div>
  <div className="output" role="output" aria-label="guess added">
        {service.map((item, index) => (
          <ul className="output_list" key={index}>
            <li className="output_el"  aria-label={item.song} key={index}>{[item.song, item.key]}</li>
          </ul>
        ))}
      </div>
      </> )
}

export default AddSongMultiplayer;