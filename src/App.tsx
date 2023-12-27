import './App.css'
import React, {lazy} from "react";
import {Route, Routes} from "react-router-dom";

const Home = lazy(() => import('../src/pages/Home').then(module => ({default: module.Home}))) as React.FC;
const Start = lazy(() => import('../src/pages/Start').then(module => ({default: module.Start}))) as React.FC;

function App() {
    return (
        <Routes>
            <Route path="/start" index element={<Start/>}/>
            <Route path="/" element={<Home/>}>

            </Route>
        </Routes>
    )
}

export default App
