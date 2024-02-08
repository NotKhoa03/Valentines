import { useState } from "react";
import "./App.css";
import Sound from "react-sound"
import videoBg from './assets/LoveBalloon.mp4'
import song from './assets/Laufey - Valentine (Official Audio).mp3'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
 
  const yesButtonSize = noCount * 20 + 16;

  const mouseOver = () => {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
    setNoCount(noCount + 1);
  }
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Really really sure?",
      "Last chance!",
      "This has to be racist",
      "I'll play overwatch with you?",
      "Backrooms?",
      "I'll get you hotpot!",
      "I thought you liked me!",
      "20 million dollars?",
      "Wouldn't you reconsider? I'm holding mumu hostage",
      "I'LL LIVE IN YOUR CLOSET???",
      "PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
    width: "200px",
    height: "30px",
    padding: "8px 8px 8px 8px"
  //   font-weight: bold; /* font-bold */
  // padding: 8px 16px; /* py-2 px-4 */
  // border-radius: 8px; /* rounded */
  };

  return (
      <div className="main">
      
      
      <div className="valentine-container singleDay">
        <audio src={song} autoPlay loop>
        </audio>
       
        {yesPressed ? (
          <>
           
            <video src={videoBg} autoPlay loop muted/>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <video src={videoBg} autoPlay loop muted/>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Will you be my Valentines, Anna?</h1>
            <div>
              <button
                className={"yes-button"} 
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              {noCount >= 15 ? (
                 <button style={noStyle} onClick={handleNoClick} onMouseOver={mouseOver} className="no-button">
                 {noCount >= 15 ? <p>Is that your final answer?</p> : getNoButtonText()}
                 </button>
              ) : (
                <button onClick={handleNoClick} className="no-button">
                 {noCount === 0 ? "No" : getNoButtonText()}
                 </button>
              )
              } 
            </div>
          </>
        )}
      </div>
    </div>
  );
}
