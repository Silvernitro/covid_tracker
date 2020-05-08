import React from "react";
import "./AboutPage.css";

export default function About() {
  return (
    <div className="container">
      <div className="textBody">
        <h3>About this page</h3>
        <p>
          Just a page to fetch covid-19 data from an API endpoint. This site was
          built for me to practise web dev.
        </p>
        <p>
          Features a graph visualization page and a comparison page to compare
          country stats. This site is built with ReactJS and React Router,
          together with React-Redux for state management.
        </p>
      </div>
    </div>
  );
}
