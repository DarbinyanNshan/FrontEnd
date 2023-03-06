import React from "react";
import "./App.css"
import {Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
            <div >
             <Sidebar/>
            </div>
            <div> 
               <Routes>
                <Route path="/:id" element={<Main/>}> </Route>
               </Routes>
           </div> 
    </div>
  );
}

export default App;
