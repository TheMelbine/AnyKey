import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoteFound from './pages/NotFound';
import './scss/app.scss';
import {CategoryPage} from "./pages/CategoryPage";
import {Layout} from "./Layout/Layout";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/category/:id" element={<CategoryPage/>}/>
                        </Route>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="*" element={<NoteFound/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
