import { useState } from 'react';
import './App.css';
import Body from './Containers/Body';
import Header from './Containers/Header';

function App() {
  const [search,setSearch]=useState("")

  return (
    <>
    <div className="App">
     <Header setSearch={setSearch}/>
    </div>
    <Body name={search}/>
    </>
  );
}

export default App;
