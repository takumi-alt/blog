import React from 'react'
import ReactDOM from 'react-dom';
import '../css/app.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Blog from './components/blog';
import Home from './components/home';
import Head from './components/Head';


const App = () => {
    return (
        <div>
            <Head />
            <Routes>
                <Route path="/react/" element={< Home />} />
                <Route path="/react/blog/:id" element={< Blog />} />
                {/* <Route path="/react/blog/:id" element={< Blog />} /> */}
            </Routes>
        </div>
    )
}

export default App;

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('react'))
