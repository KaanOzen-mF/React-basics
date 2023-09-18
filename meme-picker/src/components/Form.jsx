import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setallMeme] = React.useState([]);

  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setallMeme(data.data.memes);
  }, []);

  function getRandomMeme() {
    const memesArray = allMeme;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <div className="form-input-container">
          <input
            className="form-input form-first-element"
            type="text"
            placeholder="top text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="text"
            placeholder="bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form-button" onClick={getRandomMeme}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
