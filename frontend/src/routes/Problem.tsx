import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { rainbow as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { toTitle } from '../util';


const useFile = (path: string) => {
  const [file, setFile] = useState("Loading...");
  useEffect(() => {
    fetch(path)
      .then(resp => resp.text())
      .then((file: string) => {
        setFile(file);
      })
      .catch(console.error);
  }, []);
  return file;
}

export default function Problem() {
  const location = useLocation();
  const slug = location.pathname
    .substring(location.pathname.lastIndexOf('/') + 1);
  const problem = useFile(`/data/${slug}/problem.md`);
  const solution = useFile(`/data/${slug}/solution.js`);
  return (
    <main>
      <h2>{toTitle(slug)}</h2>
      <ReactMarkdown>{problem}</ReactMarkdown>
      <h3>Solution</h3>
      <div className="solution">
        <SyntaxHighlighter
          style={theme as any}
          language="javascript"
          children={solution}
          PreTag="div"
        />
      </div>
    </main>
  );
}