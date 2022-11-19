import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import firebaseLogo from "./assets/firebase.svg";
import "./App.css";
import {Box, Button} from "@mui/material";
import useWindowSize from "../hooks/useWindowSize";
import useFetch from "../hooks/useFetch";
import {morph} from "../util/helper";

const API_URL = import.meta.env.VITE_APP_API_URL; 

function App() {
  const {width} = useWindowSize();
  const {data, loading} = useFetch(`${API_URL}/exampleFunction-exampleFunction`); 
  const [count, setCount] = useState(0);
  const cardParams = {
    border: "2px solid #eaeaea",
    padding: morph(5, width),
    borderRadius: morph(1, width),
    backgroundColor: "#181818",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: "#0a0a0a",
      border: "1px solid #",
      boxShadow: `0px 0px ${morph(5, width)} purple`,
    }
  };
  return (
    <div>
      <Box sx={cardParams}> 
        <Box>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://firebase.google.com/docs/functions" target="_blank" rel="noreferrer">
            <img src={firebaseLogo} className="logo firebase" alt="Firebase logo" />
          </a>
        </Box>
        <h1>Vite + React + Firebase </h1>
        <h2> {data?.data}</h2>
        <div>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p>
          Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </Box>
    </div>
  );
}


export default App;
