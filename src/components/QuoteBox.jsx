import React from "react";
import Button from "./Button";
import './styles/QuoteBox.css';

const quoteBox = ({ handleChangeQuote, quote }) => {
  return (
    <section className="quoteBox">
      <h1 className="title">INFOGALAX</h1>

      <article className="phrase__container">
        <p>{quote.phrase}</p>
      </article>
      <Button handleChangeQuote={handleChangeQuote} />
      <article className="footer">
        <h4>Author: {quote.author}</h4>
      </article>

      
    </section>
  );
};

export default quoteBox;