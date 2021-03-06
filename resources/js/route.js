import React from 'react'
import ReactDOM from 'react-dom';
import '../css/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import Head from './components/Head';
import Hoot from './components/Hooter';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Detail from './components/Detail';
import Hum from './components/Hum';


const App = () => {
    return (
        <div className="bg-white overflow-hidden">
            <Hum />
            <Head />
            <Navbar />
            <Routes>
                <Route path="/blog/:id" element={< Home />} />
                <Route path="/public/blog/:id" element={< Home />} />
                <Route path="/blog/article/:id" element={< Blog />} />
                <Route path="/blog/contact/" element={< Contact />} />
                <Route path="/blog/profile" element={< Profile />} />
                <Route path="/blog/category/:id" element={< Detail />} />
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
