import { render, screen } from '@testing-library/react';
import * as home from '../mainPages/Home.js';
import Multiplayer, {TEXT_Submit_button} from '../mainPages/Multiplayer';
import Addsong, {TEXT_Submit_button_singleplayer} from '../gameComponents/addGuess'


// defaultHTML = `<div className="v1_3">
// <div className="v122_910">
//   <div className="v10_67"></div>
// </div>
// <div className="v122_909">
//   <button id="singleplayer-button" className="v122_912" onClick={this.displayQuestionSingle}><span className="v10_7">Singleplayer
//   </span></button>
// </div>

// <div className="v122_913">
//   <div className="v45_3"></div>
// </div>
// <div className="v71_26">
//   <div className="v71_31"></div>
//   <div className="v71_29"></div><span className="v71_28">Vocle</span>
//   <div className="v71_30"></div>
//   <div className="v71_33"></div>
// </div>
// <div className="v122_999">
//   <button id="multiplayer-button" className="v122_915" onClick={this.displayQuestionMulti}><span className="v10_8">Multiplayer
//   </span>
//   </button>
// </div>
// </div>`

test('render multiplayer', () => {
  render(<Multiplayer />)
  const inputButton = screen.getAllByRole("Submit", {name: TEXT_Submit_button})
});

test('render submit singleplayer', () => {
  render(<Addsong />)
  const inputButton = screen.getAllByRole("Submit", {name: TEXT_Submit_button_singleplayer})
});

