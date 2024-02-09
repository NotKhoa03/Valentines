import { useState } from "react";
import "./App.css";

import videoBg from "./assets/LoveBalloon.mp4";
import yesSong from "./assets/happy happy happy.mp3";
import song from "./assets/Alicia Keys - If I Ain't Got You (Lyrics).mp3";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [imageSrc, setImageSrc] = useState("./cat-0.jpg");
  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const MAX_IMAGES = 15;

  const yesButtonSize = noCount * 20 + 16;

  const mouseOver = () => {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
    setNoCount(noCount + 1);
  };
  const changeImage = ({ image }) => {
    setImageSrc(`cat-${image}.jpg`);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage({ image: imageIndex });
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

  const noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
    width: "200px",
    height: "30px",
    padding: "8px 8px 8px 8px",
    //   font-weight: bold; /* font-bold */
    // padding: 8px 16px; /* py-2 px-4 */
    // border-radius: 8px; /* rounded */
  };

  return (
    <div className="main">
      <div className="valentine-container singleDay">
        {yesPressed ? (
          <>
            <audio src={yesSong} autoPlay loop></audio>

            <video src={videoBg} autoPlay loop muted />
            <div className="dancing-cats">
              <img src="/happy-cat-happy-happy-cat.gif" />
              <img src="/cat-meme-funny.gif" />
              <img src="/happy-cat-happy-happy-cat.gif" />
            </div>
            <div className="text-container">
              I KNEW YOU WOULD SAY YES, POOKIE!!! I HAVE MORE FOR YOU ON THE
              14TH, SPEND IT WITH ME??
            </div>
          </>
        ) : (
          <>
            <audio src={song} autoPlay loop></audio>

            <video src={videoBg} autoPlay loop muted />
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src={imageSrc}
            />
            <h1 className="text-container">Be my Valentines, Anna?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              {noCount >= 15 ? (
                <button
                  style={noStyle}
                  onClick={handleNoClick}
                  onMouseOver={mouseOver}
                  className="no-button"
                >
                  {noCount >= 15 ? (
                    <p>Is that your final answer?</p>
                  ) : (
                    getNoButtonText()
                  )}
                </button>
              ) : (
                <button onClick={handleNoClick} className="no-button">
                  {noCount === 0 ? "No" : getNoButtonText()}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
