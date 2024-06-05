import React from "react";
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
//import NotFound from "./Pages/NotFound/NotFound";


const App = () => {
    
    return (
        <div className="app">
            <HashRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/*<Route path='*' element={<NotFound />} />*/}
                </Routes>
            </HashRouter>
        </div>
        
    )
}

export default App;