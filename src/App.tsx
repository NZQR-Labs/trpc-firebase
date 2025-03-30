import { useState } from "react"; 
import "./App.css";   
import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '../utils/trpc'; 
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid #eaeaea;
  padding: 30px;
  border-radius: 5px;
  background-color: #181818;
  transition: all 0.5s ease;
  &:hover {
    background-color: #202020
    border: 2px solid #0070f3;
    transform: scale(1.05);
  },
`;

function App() { 
  const trpc = useTRPC(); 
  const userQuery = useQuery(trpc.post.getPost.queryOptions({ id: 'id_bilbo' }));  
  const [count, setCount] = useState(0);
  
  return ( 
    <Wrapper> 
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={"/react.svg"} className="logo react" alt="React logo" />
        </a>
        <a href="https://firebase.google.com/docs/functions" target="_blank" rel="noreferrer">
          <img src={"/firebase.svg"} className="logo firebase" alt="Firebase logo" />
        </a>
        <a href="https://trpc.io/" target="_blank" rel="noreferrer">
          <img src={"/trpc.svg"} className="logo trpc" alt="Trpc logo" />
        </a>
      </div>
      <h1>Vite + React + Firebase + TRPC </h1>  
      <div>
        <h2> Server Request </h2>
        <div> 
          {
            userQuery.isLoading ? (
              <p>Loading...</p>
            ) : userQuery.isError ? (
              <p>Error: {userQuery.error.message}</p>
            ) : (
              <div>
                <p>Data: {JSON.stringify(userQuery.data?.message)}</p>
              </div>
            )
          }
        </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </Wrapper> 
  );
}


export default App;
