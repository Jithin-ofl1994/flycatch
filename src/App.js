import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Post from './containers/Post';
import Header from './components/Header';
import Blog from './containers/Blog';


function App() {
  return (
  
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Post />} />
          <Route path='/posts/:id' element={<Blog />} />
          <Route path="*" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
