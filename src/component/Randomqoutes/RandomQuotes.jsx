import React from "react";
import "./RandomQuotes.css";
import { useState } from "react";
import { IoReloadCircleOutline } from "react-icons/io5";

const RandomQuotes = () => {
  let quotes = [];

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const [Quote, setQuote] = useState({
    text: "Programming is the art of algorithm design and the craft of debugging errant code.",
    author: "Ellen Ullman",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  loadQuotes();

  return (
    <div className="container">
      <div className="quote">{Quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {Quote.author.split(",")[0]}</div>
          <div className="icons">
            <IoReloadCircleOutline
              className="ico"
              onClick={() => {
                random();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotes;
