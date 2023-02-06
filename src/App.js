import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoteFound from './pages/NotFound';
import './scss/app.scss';

function App() {
    return (
        <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NoteFound/>}/>
                        </Routes>
                    </div>
                </div>
        </div>
    );
}

export default App;
