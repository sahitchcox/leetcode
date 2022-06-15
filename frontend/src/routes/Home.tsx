import React from 'react';
import { Link } from "react-router-dom";
import problems from '../problems';
import { toTitle } from '../util';
import "./Home.css";



function Home() {
  return (
    <div className="Home">
      <h1>Hi, my name is Sarah!</h1>
      <h2>These are my leetcode solutions</h2>
      <ul>
        {problems.map((slug: string) => (
            <li><Link to={slug}>{toTitle(slug)}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
