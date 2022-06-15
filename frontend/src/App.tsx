import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import Problem from './routes/Problem';
import problems from './problems';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {
          problems.map((slug: string) => (
            <Route path={slug} element={<Problem />} />
          ))
        }
      </Routes>
    </main>
  );
}

export default App;
