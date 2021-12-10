import React from 'react'
import ReactDOM from 'react-dom';
import '../css/app.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';
import Head from './components/Head';
import Hoot from './components/Hoot';
import Contact from './components/Contact';
import Navbar from './components/Navbar';


const App = () => {
    return (
        <div>
            <Head />
            <Navbar />
            <Routes>
                <Route path="/react/" element={< Home />} />
                <Route path="/react/blog/:id" element={< Blog />} />
                <Route path="/react/contact/" element={< Contact />} />
                {/* <Route path="/react/blog/:id" element={< Blog />} /> */}
            </Routes>
            <Hoot />
        </div>
    )
}

export default App;

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('react'))
