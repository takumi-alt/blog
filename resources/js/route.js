import React from 'react'
import ReactDOM from 'react-dom';
import '../css/app.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';
import Head from './components/Head';
import Hoot from './components/Hooter';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Search from './components/Search';
import Background from './components/Background';


const App = () => {
    return (
        <div>
            <Head />
            <Navbar />
            <Routes>
                <Route path="/blog/" element={< Home />} />
                <Route path="/public/blog/" element={< Home />} />
                <Route path="/blog/:id" element={< Blog />} />
                <Route path="/blog/contact/" element={< Contact />} />
                <Route path="/blog/profile" element={< Profile />} />
                <Route path="/blog/search/" element={< Search />} />
                <Route path="/blog/back/" element={< Background />} />
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
