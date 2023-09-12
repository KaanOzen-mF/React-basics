import React from "react";
import memesData from "../memesData";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(meme);

  function getRandomMeme() {
    const randomNumber = Math.floor(
      Math.random() * memesData.data.memes.length
    );

    const url = memesData.data.memes[randomNumber].url;

    setAllMemeImages((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  console.log(allMemeImages);
  return (
    <main>
      <div className="form">
        <div className="form-input-container">
          <input
            className="form-input form-first-element"
            type="text"
            placeholder="top text"
            name=""
            id=""
          />
          <input
            className="form-input"
            type="text"
            placeholder="bottom text"
            name=""
            id=""
          />
        </div>
        <button className="form-button" onClick={getRandomMeme}>
          Get a new meme image
        </button>
      </div>

      <img className="meme-image" src={allMemeImages.randomImage} />
    </main>
  );
}
