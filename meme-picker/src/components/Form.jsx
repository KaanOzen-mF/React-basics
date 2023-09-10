import React from "react";

export default function Form() {
  return (
    <div className="form-container">
      <form action="">
        <div className="input-container">
          <input type="text" placeholder="top text" name="" id="" />
          <input type="text" placeholder="bottom text" name="" id="" />
        </div>
        <input type="button" value="Get a new meme image" />
      </form>
    </div>
  );
}
